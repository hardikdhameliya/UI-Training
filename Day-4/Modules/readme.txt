In ES 6 and above, every JS file is a module.
This is done so that, we can divide whole project in small independent modules.
In order to use class, functions, variables, outside the module, we must export them.
There are 2 ways of exporting
1. Default export
export default Employee
2. Named export
export {
    test
}

In a module, there can be only 1 default export.

SPA - single page application

This is a modern way of application development.
With the rising popularity of Javascript script such as React, Angular SPA has become defacto standard of application development.
All these frameworks generate HTML dynamically using Javascript
Benefit of spa is webpage is more interactive. 

Closure is a combination of functions bundled together with the referecet to its surrounding states.