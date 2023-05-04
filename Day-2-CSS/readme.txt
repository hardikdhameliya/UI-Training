CSS - Cascading style sheets
It is used to present and apply presentation logic to HTML pages
CSS comes up with a lot of properties and there associated values. We just need to apply properties to HTML elements.

CSS can be applied in following 3 ways:
1. Inline CSS
    In this approach, we use style attribute of that specific HTML elements to apply CSS properties
2. Internal CSS
    In this approach, we use style tag in HTML page to apply properties to all the tags of that webpage. 
    In order to apply CSS style to HTML elements, we need to select the elements. To do that, CSS gives us different 
    selector. 
    Syntax of selector is as follows
    selector{
        property:value
    }
    There are following types of selectors
    1. tag selector - As name specifies, we will be making use of tags
    Example: 
    p {
        color:red
    }

    2. id selector - It is used to specify style of unique element. It uses value of id attribute of the HTML element and prefixes with # symbol

    3. class selector - It is used to specify style of group of elements. This allows you to set particular style for many HTML elements with the same class.
    It uses value of class attribute of the HTML element and prefixes with ".".

    4. grouping selector - It is used to specify style of group of elements. We can combine id selector, class selector and tag selector.

3. External CSS
    In this approach, we write a separate CSS file and link CSS with HTML.