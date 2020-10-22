# Semantic Web

The semantic web is primarily about 2 things:

1. Giving absolute identifiers to objects, properties, and types so that the meaning of those things can be shared across applications
2. Allowing for incomplete/uncertain data (the Open World Assumption is part of this, as is not enforcing schemas on types by default (although SHACL does this), in addition to allowing some inferences to be made, but not unrealistic ones (difference between domain and domainIncludes))

The graph data model was a convenient way to achieve these two things and is convenient for thinking about these properties when bits of vocabularies are hosted in different places. It also came from the original ideas behind the Web v1, including the choice to allow one-directional and broken links.

However, as the industry deals with larger data sets, we've come up with innovative storage and serialization technology that we shouldn't be replacing. Not to mention that the benefits of Semantic Web tech apply to datasets that are 100% not suited as being represented natively as graphs.

We've already built a great tool to annotate the most common format for document-based data models: JSON in JSON-LD. You can add one `@context` line to every insert action for MongoDB and make every document semantic-ready. Next we need to build new tools to annotate tabular and relational formats that aren't immediately suited for Semantic Web, and think about transport mechanisms that preserve the performance and other features we've thought about for so long while properly sharing the semantic annotations.
