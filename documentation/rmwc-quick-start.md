---
title: 'Quick Start for RMWC'
slug: 'quick-start-rmwc'
---

# Quick Start

```javascript
import React from 'react';
import { Button } from 'rmwc';

//all of RMWC is only around 11k, but if you only need a few components
// you can import like so
import { Button } from 'rmwc/Button';

const HelloWorld = props => <Button>Easy</Button>
```

## Project Methodology

- To create the thinnest, lightest, and spec compliant wrapper around [Google Material Design Components for the Web][1]
- To utilize the Foundation javascript classes and expose their api for consumption
- To be as unobtrusive and sensible as possible.

[1]: https://material.io/components/web/
