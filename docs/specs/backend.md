# Backend

The following specification defines a compliant Loqu Backend Server. Any Backend server can then be used with a compliant frontend server.

## API Interfaces

A Backend Server MUST provide at least one of the listed API protocols, but MAY provide more:

- Hydra/HTTP
- GraphQL/LD
- SPARQL

Several of the API protocols could be used by non-semantically-aware clients, such as HTTP and GraphQL. However, the requests would be translated into graph-based operations by the backend.

## Comunica

We could get SPARQL support for free by exposing a Triple Pattern Fragment API (which is defined with hydra). This is probably quite easy with node-quadstore or whatever
