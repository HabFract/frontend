```
├── Home
│   ── (Get Started/Onboarding)
│     └── (Onboarding 1/x)
│        └── (Onboarding 2/x)
│           └── (Onboarding 3/x) ...
│   ├── What are Atomic Habits? (The psychology of Habits)
│   ├── Habit Templates (7 habits of.. etc.)
│   ├── About Us (To let them give us nice jobs haha!)
│       
├── Visualisations
├── HabitList
├── LifeDomainList
├── HabitDashboard
```

# -- Page: Home --
- ## AgentProfile exists
  - `Splash` ("logged in")
  #### Links:
      -- What are Atomic Habits?
      -- Habit Templates
      -- About Us
      
      (SideNav)
        -- Visualisations
        -- HabitList
        -- LifeDomainList
        -- HabitDashboard
- ## No AgentProfile exists
  - `Splash` ("not logged in")
  #### Links:
      -- Get started  ("not logged in")
        `Onboarding 1/x`
      -- What are Atomic Habits?
      -- Habit Templates
      -- About Us
  
# -- Page: Onboarding --
Currently treat onboarding as one continuous flow. We may later need checks for "LifeDomain exists", "Habit exists" if the onboarding process doesn't get completed fully, then force redirect to a specific part of the onboarding process.
- ## AgentProfile exists
  - Redirect to `Home` ("logged in") with `InfoMsg`
- ## No AgentProfile exists
  - `Onboarding` 1/x
  #### Links:
      -- `Onboarding` 2/x


# -- Page: Habit Dashboard --
1. View a summary of all habit data. 
2. Filter by domain using left navigation.
3. Include streaks widget, calendar widget, graphs. 
- ## AgentProfile exists
  #### Links:
      (SideNav)
        -- UserProfile
        -- LifeDomainList
        -- HabitDashboard
        -- Visualisations (one link per LifeDomain)
        -- HabitList (one link per LifeDomain)
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
