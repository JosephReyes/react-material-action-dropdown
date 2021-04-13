# React Material - Action Dropdown Menu

This is a Material select but instead of changing a form value, the left side of the arrow does some action. Just triggers download for now but considering redirecting or new tab as a future improvement

![image](https://drive.google.com/uc?export=view&id=1XI8CsguwdKbaiZseUwwG1-2TQrEBKM8U)

## Why the package was created?

When needing this component for work I couldn't find a library that does this. So I needed to hand roll my own. And thus, I am publishing this package in the hope that it can help someone else that needs to do something similar

## How to use

```
import { ActionDropdownMenu, MenuItemShape } from 'react-material-action-dropdown';

const menuItems: MenuItemShape[] = [{ id: 'id', text: 'text to display', link: 'e.g. download link'}]

...
<ActionDropdownMenu menuItems={menuItems} initialValue={menuItems[0]} />
...
```
