# Loqu Authoring tools

You can deploy your test ontology under any domain. For testing, we recommend: `http://schemas.test` because it is blacklisted with IANA so it won't ever resolve. This means you need to add a local resolution rule to `etc/hosts`

## Frontend processing library

Want to support various query/data access methods:

- Any semantic web media type over HTTP -> put RDF triples into a graph
- Hydra web APIs -> triples graph
- Follow/expose Hydra semantics
- SPARQL -> triples graph
- is it even worth thinking about GraphQL RN

Then, want to provide that data to appropriate Semantic Web Components:

Use JSON-LD framing with each component to define the structure of the data requested.
Also allow us to define processing operations on Types, and associate those operations with JSONLD frames

Then once user interacts with a piece of data, we need to maybe:

- modify it -> this requires API specific details (HTTP actions in Hydra, SPARQL Update)
- request new data based on it -> again pretty api specific. E.g. a hover over an item in a list makes a new req
- transition to a new page/state

https://github.com/HydraCG/Heracles.ts/issues/2#issuecomment-325041569

Why Protege treats some properties as both Object and Annotation properties: https://mailman.stanford.edu/pipermail/protege-user/2014-May/000683.html
because they're not defined as one or the other
Also, an object property could mean certain inferences are made whereas annotation couldn't

## Key value driver for frontend developers

- Great fake semantic web data generation, can generate standards-based (e.g. schema.org) fake data for your API
- Automatic generic UI creation from Hydra APIs
- Allows for conforming Sweb data from sources using framing, providing standard JS objects for components and functions to work on
- Allows for adding new operations and creating types that operate on data types or node objects (e.g. the linkage of OOP with Sweb)

## Hydra quirks

Apparrently Hercules expects all the supportedclasses and properties to be avilable directly in the ApiDocumentation, as it doesn't dereference an IRI entrypoint: todo look at the lib for this

The JSON representation has infinite recursion/a cycle

supportedOperations -> items[0] -> target -> supportedOperations

The heracles client seems stable as it is "reference" but it is pretty low level and there isn't much control/guidance

Alceus may be better for choosing operations, etc

## JSON-Frame in a more restrictive/validation mode

`Explict=true` will remove all extraneous fields not provided in the frame
`Require all = true` will mean that the frame function will simply return nothing (not match) the frame if the node doesn't contain a listed field. This can act as a simple validation mechanism.

By using both these flags, we can ensure that the data passed in to the function or component is exactly what is requested.
We should also provide an option to set them as a soft value, e.g. they are actually false and provide less garuantees, but we check them as well to provide warnings/errors during development. This could help with a transition from more flexible to less flexibly, but we don't know if we want to support that use-case

Explicit and matching all: good for edge nodes that display small bits of data.

However for an intermediate or more complex UI component like a list or a map, we don't want to filter out data that is potentially useful to downstream components. This is assuming that the only copy of the data is in memory and is being passed down recursively. We may find that keeping a page-wide state (e.g. in a react state management lib) allows us to update the data better or better provide slices of data.

## Thinking about component trees

Entirely loqu/generic components like:

- MainView
- WindowView (a hydra instance)
- EntitySelector (go from entrypoint/api docs, select entity types)
- List

or

- EntitySelector
- GenericDataView (e.g. a `/me` uri with a Person)

or

- EntitySelector
- GeoDataView (for a list or collection of points)
- PopupView (or HoverView) dereferencing an IRI
- GenericDataView - for a `Store` datatype

will just always pass down the entire response/data they get

but imagine a Reversed component structure.

For example

- Organization
  - BasicDetails
    - List (Owners)
      - Person
  - ProjectList

but the JSON looks like this

```json
{
  "@type": "Person",
  "name": "Mr. Jay",
  "owns": {
    "@type": "Organization",
    "bla": "bla"
  }
}
```

and the top component for the organization page slices/restricts to the Organization object above.

There are 2 solutions:

1. provide access to the higher context
2. create a triple that links from Org to owner (this could be using `@reverse` can we have reverse and regular at same time?). But we don't want to restrict our users to only accessing data that is the form `CurrentComponent predicate object`. We also want the user to be aware of any links with the Component as the object in the current data graph. How we do this?

we could probably convert to RDF and just lookup the pattern `* * CC` but its a bit more complexity.

maybe we define a component or function as such:

we allow the data requested to potentially include additional descriptors or APIs to fetch data. Maybe semantically-enhanced GraphQL here?

```ts
type CompOrFunction = {
  data: {
    frame: JsonLDFrame;
    objectLinks?: FutureOptions;
  };
  component: React.FC<>;
  function: () => {}; // etc...
};
```
