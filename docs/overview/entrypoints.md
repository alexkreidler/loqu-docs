---
title: Entrypoints
---

An Entrypoint is the component that takes the input data, handles any processing through Loqu, and renders the Semantic Web Component.

It's the wrapper component that enables Loqu to enrich your components with a variety of features.

It is either `<Dynamic>` from `@loqu/react`, which determines which SWC to render based on selectors, or the `<LinkedComponent>` returned from the `linked(SemanticComponent)` HOC, which always renders the component it was linked from.

Both versions handle:

- Data fetching (if necessary and in some cases, e.g. `rdf-dereference`)
- Data validation (if specified by the Data Specification)
- Data processing (transforming from the input data format to the one requested by the component)

More about metadata, props, etc.
