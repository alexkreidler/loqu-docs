---
title: Semantic Web Component
---

<!-- Callouts/admonitions -->

This page gives the conceptual overview of the elements of a Semantic Web Component. It will help you understand how to build your own components.

:::note
For the purposes of this page, "component" refers to a Semantic Web Component, and UI component will be written explicitly when referring to a regular React, Angular or other UI framework component.
:::

A Semantic Web Component has 3 key parts:

- Selector (and Metadata)
- Data Specification
- UI Component

An Entrypoint is the component that takes the input data, handles any processing through Loqu, and renders the Semantic Web Component. You'll read more about that [next](entrypoints).

## Selector

A selector determines which data a component operates on. It can be thought of as a claim on any piece of data passed to the Entrypoint.

Some components, that are bundled in the `@loqu/generic` package, are "Generic Components", and are designed to handle and render a variety of data. They also allow you to customize the rendering of small pieces of data while leaving default containers or themes the same.

Other components, most likely the most common an app developer will write, are designed to render a specific piece of data. These components will likely use an `IRISelector` or `TypeSelector` that match on a node based on the IRI or `rdf:type` (if provided) of the node, respectively.

These selectors are sorted by a priority value provided by the Component, and by how much of the Metadata passed in matches the Metadata on the component. Metadata includes things like the `UIContext` which refers to whether a component renders a piece of data as a `Card`, `Page`, `Icon`, etc.

The component with the highest priority selector is the one which is chosen to be rendered.

## Data Specification

Since Semantic Web/RDF data can be consumed in many ways, we allow components to request it in several easy-to-use JS API formats:

- RDF/JS
- Clownface
- JSON-LD, which has a subcategory, "form", which matches the spec as either:
  - Expanded
  - Compacted
  - Flattened
  - Framed

The most common and recommended format for all application-level components is JSON-LD in the Framed form, because it allows for

1. Data guarantees
2. Strong type information

It's similar to a GraphQL query in that sense

## UI Component

This is the actual component that gets rendered, which receives the data in the format indicated in the Data Specification, any props passed into the Entrypoint.

Loqu was originally written for React in mind, however, someday Loqu Core will be framework-agnostic and thus support multiple component libraries, and possibly even mixing and matching.
