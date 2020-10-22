---
title: Semantic Web Component
---

<!-- Callouts/admonitions -->

:::note
For the purposes of this page, "component" refers to a Semantic Web Component, and UI component will be written explicitly when referring to a regular React, Angular or other UI framework component.
:::

A Semantic Web Component has 3 key parts:

- Selector (and Metadata)
- Data Specification
- UI Component

An Entrypoint is the component that takes the input data, handles any processing through Loqu, and renders the Semantic Web Component. You'll read more about that [next](entrypoints).

## Selector

A selector determines which data a component operates on.

It can be thought of as a claim on any piece of data passed to the Entrypoint.

These selectors are sorted by priority, and how much of the Metadata passed in matches the Metadata on the component.

Metadata includes things like the `UIContext` which refers to whether a component renders a piece of data as a `Card`, `Page`, `Icon`, etc.

The component with the highest priority selector is the one which is chosen to be rendered.

## Data Specification

Since Semantic Web/RDF data can be consumed in many ways, we allow components to consume it in several formats:

- RDF/JS
- Clownface
- JSON-LD, which has a subcategory, "form", which matches the spec.
  - Expanded
  - Compacted
  - Flattened
  - Framed

The most common and recommended format for all application-level components is JSON-LD in the Framed form, because it allows for

1. Data garuantees
2. Strong type information

It's similar to a GraphQL query in that sense

## UI Component

This is the actual component that gets rendered, which recieves the data in the format indicated in the Data Specification, any props passed into the Entrypoint.

Loqu was originally written for React in mind, however, someday Loqu Core will be framework-agnostic and thus support multiple component libraries, and possibly even mixing and matching.
