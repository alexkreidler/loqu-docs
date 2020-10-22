---
title: Getting Started
---

## Install

```sh
yarn add @loqu/core @loqu/react

npm install @loqu/core @loqu/react
```

## Write a Semantic Web Component

```tsx
import {
  UIContext,
  SemanticComponent,
  Strictness,
  FramedForm,
} from "@loqu/core";

import { linked, Entrypoint } from "@loqu/loqu-react";
import React from "react";

const Spec = {
  "@context": {
    "@vocab": "http://schema.org/",
  },
  "@type": "Person",
  givenName: "",
  familyName: "",
  gender: "",
  email: "",
  birthDate: "",
};

// This is a little convoluted of a type
export const PersonPage: SemanticComponent<FramedForm<typeof Spec>, unknown> = {
  id: "PersonPage",
  selector: {
    type: "type",
    // This will match both http:// and https:// IRI schemes
    iri: /.*schema.org\/Person/,
  },
  metadata: {
    uiContext: UIContext.Page,
  },
  data: {
    strictness: Strictness.NoChecks,
    spec: {
      format: "jsonld",
      form: "framed",
      frameSpec: Spec,
    },
  },

  component: ({ data, rdfData }) => {
    const person = data.document;
    return (
      <div>
        <div className="title-section">
          <h1>
            {person.givenName} {person.familyName}
          </h1>
          <p>{person.email}</p>
        </div>
        <h3>About</h3>
        <p>Gender: {person.gender}</p>
        <p>Birth Date: {person.birthDate}</p>
      </div>
    );
  },
};

export const LinkedPersonPage = linked(PersonPage);
```

## Use a Semantic Web Component

```tsx

import { Entrypoint } from "@loqu/loqu-react";

export const App = () => {
    return <Entrypoint uri={"http://www.markus-lanthaler.com/"}>
}

```
