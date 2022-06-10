1 - Pick a component or frame from the figma design
2 - Write a component tree for the page if it's a frame, and add it to FRONTEND_COMPONENT_TREE
3 - Figure out whether component is an atom (leaf of the component tree) or something bigger
4 - Copy the folder from another similar component in the same component folder, rename folder appropriately
5 - (Optional) Add some interfaces in the .d.ts file for component/props/state
6 - Clean out the 'styled' file
7 - Rename any remaining references to the copied component (filenames, component names, interface names etc.)
8 - Figure out what antd component was used in the design
   - see 'finding-the-antd-component'
9 - In the component index.tsx, import the component from antd
   - Reference: https://ant.design/components/overview/
10 - Delete component body, import antd component using intellisense
11 - Copy a storybook .stories.tsx file from component-ideal to replace current (Avatar is typed, LoginForm is not, use either). Update component imports.
12 - 
