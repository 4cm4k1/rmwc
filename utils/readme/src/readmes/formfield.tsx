import React from 'react';

import { DocProps, Docs, DocsExample, DocsSubtitle } from '@rmwc/doc-utils';
import examples from '../generated-examples/formfield.json';
import propsSrc from '../generated-props/formfield.json';

import { FormField } from '@rmwc/formfield';

export default function Readme() {
  return (
    <Docs
      title="Form Fields"
      lead="MDC Form Field provides an mdc-formfield helper class for easily making theme-aware, RTL-aware form field + label combos. It also provides an MDCFormField class for easily making input ripples respond to label events."
      module="@rmwc/formfield"
      styles={['@material/form-field/dist/mdc.form-field.css']}
      docsLink="https://material.io/develop/web/components/input-controls/form-fields/"
      examples={examples}
    >
      <DocsExample>
        <FormField>
          <input type="checkbox" id="input" />
          <label htmlFor="input">Input Label</label>
        </FormField>
      </DocsExample>

      <DocsSubtitle>Align end</DocsSubtitle>
      <DocsExample>
        <FormField alignEnd>
          <input type="checkbox" id="input" />
          <label htmlFor="input">Input Label</label>
        </FormField>
      </DocsExample>

      <DocsSubtitle>No wrap</DocsSubtitle>
      <DocsExample>
        <FormField noWrap>
          <input type="checkbox" id="input" />
          <label htmlFor="input">Input Label</label>
        </FormField>
      </DocsExample>

      <DocsSubtitle>Space between</DocsSubtitle>
      <DocsExample>
        <FormField spaceBetween>
          <input type="checkbox" id="input" />
          <label htmlFor="input">Input Label</label>
        </FormField>
      </DocsExample>

      <DocProps
        src={propsSrc}
        components={[{ displayName: 'FormField', component: FormField }]}
      />
    </Docs>
  );
}
