1 - Pick a component or frame (template/page) from the figma design
2 - IF it's a page, Write a component tree & add it as a markdown file in the pages/componentTrees. Add labels for component type (A,M,O) or AntD

3 - Figure out whether component is an atom (leaf of the component tree) or something bigger
4 - Copy the folder from another similar component in the same component folder, do a search in the folder and rename/replace appropriately
5 - Rename folder
6 - (Optional) Add some interfaces in the .types file for component/props/state
7 - Clean out the 'styled' file

8 - Figure out what antd component was used in the design
   - see 'finding-the-antd-component'
9 - In the component index.tsx, import the component from antd
   - Reference: https://ant.design/components/overview/
10 - Clean out the component body, import and add antd component

11 - Clean out the storybook .stories.tsx file (or copy from component-ideal to get a smart/dumb template.
12 - Add some stories for different component states.
    - If it is a dumb component, hard code some mock data as props. (if you updated the types correctly this bit will scream at you if you error)
    - If it is a smart component, use some mock from the `/graphql/generated/mocks.ts` file.
      -- If no mock exists, modify `schema.graphql` and run `npm run gen`
    - `npm run storybook` and check what you have got on http://localhost:6006/
    - Reference: https://storybook.js.org/docs/react/get-started/whats-a-story

13 - Tweak the styled components, feeding the colors from the theme.
   -  Reference: https://styled-components.com/docs/basics#styling-any-component

14 - (Smart components) Add passing tests in the `.spec.tsx` file before making a PR to merge into `main`