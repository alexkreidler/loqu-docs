---
id: about-semantic
title: What the Semantic Web Means to Me
author: Alex Kreidler
author_title: Loqu Core Team
author_url: https://github.com/alexkreidler
author_image_url: https://avatars2.githubusercontent.com/u/11166947?s=400&v=4
tags: [semantic-web, linked-data, data-representation, broader-thoughts]
---

<!-- # What the Semantic Web Means to Me -->

For me, the semantic web is primarily about these things:

1. Giving absolute identifiers to objects, properties, and types so that the meaning of those things can be shared across applications
2. Allowing for incomplete/uncertain data[^1]
3. (Optionally) Dereferencing the vocabularies behind #1 to provide more information. This is a best practice and is known as Linked Data.

[^1]:
    The Open World Assumption is part of this, along with less focus on enforcing schemas on types by default (although SHACL fills this void somewhat).

    The Semantic Web's ontologies can also be defined very richly (allow lots of inferences, but this also imposes more requirements), or sparsely. For example, see the difference between `rdfs:domain` and `schema:domainIncludes`.

The graph data model was a convenient way to achieve these two things and is convenient for thinking about those principles when bits of vocabularies are hosted in different places. It also came from the original ideas behind the Web v1, including the choice to allow one-directional and broken links.

However, as the industry deals with larger data sets, we've come up with innovative and easy-to-use storage and serialization technology that we shouldn't replace. Not to mention that the benefits of Semantic Web tech apply to datasets that are 100% not suited as being represented natively as graphs.

This is one reason why the W3C, the main steward of the Semantic Web standards, developed JSON-LD, which allows annotating JSON that your APIs already consume and emit with semantic meaning. You can add one `@context` line to every insert action for MongoDB and make every document semantic-ready.

There are so many use-cases where semantic technologies and knowledge graph patterns unlock much more value. Just ask any of the enterprise customers of the many graph databases that have experienced [explosive growth](https://db-engines.com/en/ranking_categories) over the past decade.

<!-- Add image? -->

Enterprises constantly deal with having to normalize and join data from unique sources and datasets created by different teams for their own purposes. They are realizing that instead of having those tasks that normally fall to data engineers with complex ETL pipelines be menial and painful, by embracing semantic technology they can automatically map the vocabularies of one dataset to another to much more painlessly expose one unified interface.

But keep in mind, the benefits described above of semantic technologies aren't only for users of graph databases. Even by annotating or mapping regular relational table schemas to semantic identifiers, organizations can facilitate the ease of data integration mentioned above.

Next we need to build new tools to annotate tabular and relational formats that aren't immediately suited for the graph data model, and think about transport mechanisms that preserve the performance and other features we've thought about for so long while properly sharing the semantic annotations.

<!-- Possibly put the rest in separate article -->

### Yet another pipe dream?

Many promises were made in the early days of the Semantic Web, including that we'd all be making appointments via semantic agents, etc.

Several factors that compounded on each other conspired to keep that from happening

- Lack of demand
  - Lack of impact on users and thus user demand
  - Lack of engineering demand because value proposition was not clear vs. traditional models
- Negative incentives
  - Many companies get rich off their own data, networks/graphs that they own
  - For them, it's a competitive advantage, and sometimes the only one
  - They don't want to give data away for free
  - The open groups developing the standards didn't invest in authentication and other tools to allow semantic web to be useful in acces-restricted environments
- Relative complexity of standards
- Lack of tooling for developers
  - Lack of documentation

### Why now?

The Loqu project has been very careful to both

1. Offer a great value proposition to developers
2. Make it easy
