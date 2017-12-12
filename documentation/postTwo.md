---
title: "Buttons Component"
slug: "button-rmwc"
---

# Buttons

<div><button class="mdc-ripple-surface mdc-button mdc-ripple-upgraded">Default</button><button class="mdc-ripple-surface mdc-button mdc-button--raised mdc-ripple-upgraded">Raised</button><button class="mdc-ripple-surface mdc-button mdc-button--dense mdc-ripple-upgraded">Dense</button><button class="mdc-ripple-surface mdc-button mdc-button--compact mdc-ripple-upgraded">Compact</button><button class="mdc-ripple-surface mdc-button mdc-button--unelevated mdc-ripple-upgraded">Unelevated</button><button class="mdc-ripple-surface mdc-button mdc-button--stroked mdc-ripple-upgraded">Stroked</button><button class="mdc-ripple-surface mdc-theme--secondary-bg mdc-theme--text-primary-on-secondary mdc-button mdc-button--raised mdc-ripple-upgraded" style="margin: 5px">With Theme</button></div>

```html
<Button>Default</Button>
<Button raised>Raised</Button>
<Button dense>Dense</Button>
<Button compact>Compact</Button>
<Button unelevated>Unelevated</Button>
<Button stroked>Stroked</Button>
<Button raised theme={['secondary-bg', 'text-primary-on-secondary']}>With Theme</Button>
```

The MDC Button component is a spec-aligned button component adhering to the Material Design button requirements. It works without JavaScript with basic functionality for all states. You can enhance the button to have ripple effects by instantiating MDCRipple on the button element. See MDC Ripple and Demo for details.
