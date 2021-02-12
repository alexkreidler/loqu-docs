---
title: Vision for the project
---

We wanted to solve a few problems:

- It's hard to get started creating interfaces for data in a Semantic Web format. Getting it from an API to a usable API for frontend components is tough.
- There aren't great interfaces for Semantic Web APIs, even though the Semantic Web offers a wealth more possibilities for hovering, linking, and interacting with different types of content.
- Interfaces that do exist for Semantic Web APIs are mostly generic and cannot be modified without a fork. How useful is that?
- And finally, [Data fetching on the web still sucks](https://performancejs.com/post/hde6a90/Data-Fetching-on-the-Web-Still-Sucks), and the problem is compounded with Semantic Web APIs, which vary widely.


## Data fetching and type safety

One great benefit of the Semantic Web is that the meaning of entities is much more flexible. The underlying ontology could be updated to include additional information, or properties or classes could do the same. Also, the naming of fields in transport formats like JSON-LD doesn't affect the semantic meaning of the data.

However, on the web we often want to develop components with specific assumptions about the data that we receive. This is perfectly valid and important to build correct APIs. Often we type data with TypeScript, which then disappears in compilation and can sometimes cause mysterious runtime errors. However, these can be made to look nice for the user.

Some discussion of this from the linked article is here:

>  - **File size**. You shouldn’t have to ship kilobytes of metadata describing your data schema to clients in order to fetch data.
>  - **Type safety**. Your code should know what type of data it got from the server.
>  - **Versioning**. Updating your data model should be backwards-compatible; clients should be forwards-compatible.

The issue is that some of these principles have overlap and impose constraints on the other principles.

For example, if one wants type safety at runtime, they need runtime type-checking, which in some shape or form requires "metadata describing your data schema" to be shipped along with the code. This then would increase file size. I suppose one could have an API solely for returning the data schema, and then the frontend would request that first, then fetch the appropriate data and validate that. I don't know what it would look like in other stacks (maybe a service returning JSON Schema), but for RDF it could be a service returning SHACL constraints.