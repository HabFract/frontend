For MVP, open to discussion as to what is and isn't necessary.

```
├── Home
│   ── (Onboarding) Get Started/Make a Profile
│     └── (Onboarding 1/x)
│        └── (Onboarding 2/x)
│           └── (Onboarding 3/x) ...  
|               └── Visualisations
│ ├── Info Portal 
│   ├── What
│   ├── Why
│   ├── How
|
│ ├── CTAs
│   ── Primary - (Get Started/Onboarding) Make a Profile
│   ── Secondary - Habit Templates (7 habits of.. etc.)
|
│ ├── Footer Links
│   ├── About Us (To let them give us nice jobs haha!)
│   ├── About Holochain
│   ├── Feedback form
│   ├── Site map linking all of above
│       
├── Visualisations
├── HabitDashboard
```

# -- Page: Home --
- ## AgentProfile exists
  - `Splash` ("logged in")
  #### Links:
      -- Info Portal
      -- CTA - Habit Templates
      -- Footer Links
      
      (SideNav)
        -- Visualisations
        -- User Info
        -- Burner 1... (maybe) which goes to the default Vis
        -- HabitDashboard
- ## No AgentProfile exists
  - `Splash` ("not logged in")
  #### Links:
      -- Make/Break/Get Started : Make a Profile
        `Onboarding 1/x`
      -- Info Portal
      -- Habit Templates
      -- Footer Links
  
# -- Page: Onboarding --
Currently treat onboarding as one continuous flow, but know that routing will happen if a user is only at a certain stage.
- ## AgentProfile exists
  - Redirect to `Home` ("logged in") with `InfoMsg`
- ## No AgentProfile exists
  - `Onboarding` 1/x
  #### Links:
      -- `Onboarding` 2/x etc.


# -- Page: Visualisations --
This will for now be a stub, relying on pulling in the d3js vis engine from the web2 proof of concept once the backend is ready.
There will need to be caching at each level / each call to the backend to create the 'fractal'/regenerating effect.
- ## AgentProfile exists
  #### Links:
      (SideNav Logged In)
        -- UserProfile
        -- BurnerList
        -- HabitDashboard
        -- Visualisations (one link per Burner)
        -- HabitList (one link per Burner)
- ## No AgentProfile exists
  - Redirect to `Home` ("not logged in") with `InfoMsg`


# -- Page: Habit Dashboard --
1. View a summary of all habit data. 
2. Filter by Burner using left navigation.
3. MVP just has basic streak/atomicity break down.
- ## AgentProfile exists
  #### Links:
      (SideNav Logged In)
        -- UserProfile
        -- BurnerList
        -- HabitDashboard
        -- Visualisations (one link per Burner)
        -- HabitList (one link per Burner)
- ## No AgentProfile exists
  #### Links:
      -- `Home`
      -- Get started  ("not logged in")
        `Onboarding Template 1/x`

# -- Page: 404 --
  Redirect to `NotFound` with `InfoMsg` explaining page not found
  #### Links:
  - ## AgentProfile exists
        -- Home
        -- Dashboard(?)


# -- Info Portal --
  Visible to all, static assets plus dynamic content on change from What/Why/How, mid priority
# -- Footer Links --
  Visible to all, static assets, low priority