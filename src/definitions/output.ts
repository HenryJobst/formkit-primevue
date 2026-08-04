import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import PrimeOutputBoolean from '../components/PrimeOutputBoolean.vue'
import PrimeOutputDate from '../components/PrimeOutputDate.vue'
import PrimeOutputDuration from '../components/PrimeOutputDuration.vue'
import PrimeOutputLink from '../components/PrimeOutputLink.vue'
import PrimeOutputList from '../components/PrimeOutputList.vue'
import PrimeOutputNumber from '../components/PrimeOutputNumber.vue'
import PrimeOutputReference from '../components/PrimeOutputReference.vue'
import PrimeOutputText from '../components/PrimeOutputText.vue'

export const primeOutputTextDefinition: FormKitTypeDefinition = createInput(PrimeOutputText, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'isTranslationKey',
    'html',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
    'convertValue',
    'maxLength',
  ],
})

export const primeOutputDateDefinition: FormKitTypeDefinition = createInput(PrimeOutputDate, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
})

export const primeOutputNumberDefinition: FormKitTypeDefinition = createInput(PrimeOutputNumber, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'PrimeOutput',
})

export const primeOutputLinkDefinition: FormKitTypeDefinition = createInput(PrimeOutputLink, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'title',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'PrimeOutput',
})

export const primeOutputReferenceDefinition: FormKitTypeDefinition = createInput(
  PrimeOutputReference,
  {
    props: [
      'prefix',
      'suffix',
      'iconPrefix',
      'iconSuffix',
      'reference',
      'internal',
      'linkComponentName',
      'title',
      'onIconPrefixClicked',
      'onIconSuffixClicked',
      'iconPrefixTooltip',
      'iconSuffixTooltip',
    ],
    family: 'PrimeOutput',
  },
)

export const primeOutputBooleanDefinition: FormKitTypeDefinition = createInput(PrimeOutputBoolean, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'trueValue',
    'falseValue',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'PrimeOutput',
})

export const primeOutputDurationDefinition: FormKitTypeDefinition = createInput(
  PrimeOutputDuration,
  {
    props: [
      'prefix',
      'suffix',
      'iconPrefix',
      'iconSuffix',
      'onIconPrefixClicked',
      'onIconSuffixClicked',
      'iconPrefixTooltip',
      'iconSuffixTooltip',
    ],
    family: 'PrimeOutput',
  },
)

export const primeOutputListDefinition: FormKitTypeDefinition = createInput(PrimeOutputList, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'divider',
    'itemClass',
    'dividerClass',
    'listStyle',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
    'optionLabel',
    'options',
    'optionValue',
    'convertValue',
  ],
  family: 'PrimeOutput',
})
