---
title: Extending the library
---

TODO: we'll provide examples of adding additional Data Formats, the appropriate plugins to do there, etc.

However, to make sure that your data formats interoperate with the others, we have a few guidelines.

1. Set the `graph` value of each `Quad` to the source of the data. It should be an IRI representing where the data comes from, most likely an HTTP URL. However it could be a non-http identifier for a data interface.

This guideline comes from the fact that both Alcaeus and our rdf-dereference data fetcher do the same thing.
