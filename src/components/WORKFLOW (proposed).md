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
10 - Delete component body, import and add antd component


11 - Copy a storybook .stories.tsx file from component-ideal to replace current (Avatar is typed, LoginForm is not, use either). Update component imports.
12 - Add some stories for different component states.
    - If it is a dumb component, hard code some mock data as props. (if you updated the types correctly this bit will scream at you if you error)
    - If it is a smart component, use some mock 
    - `npm run storybook` and check what you have got on http://localhost:6006/
    - Reference: https://storybook.js.org/docs/react/get-started/whats-a-story

13 - Tweak the styled components, feeding the colors from the theme.
   -  Reference: https://styled-components.com/docs/basics#styling-any-component