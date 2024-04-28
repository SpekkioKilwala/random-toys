I want to see how Elo rating is reflected in repeated (many, random) 1v1 matchups between simple agents.

I need:
- A simple agent object with:
  - identifier (also their key in the combatants object)
  - roll bonus
  - current Elo rating (starting at 1000)
  - rather than that rating being public, it needs to have specific getters and setters
- A simulated arbitrarily large baseline population, which is just a special agent:
    which is that its Elo rating can't ever be updated. It stays at 1000 forever.
- A bunch of the normal agents and one special one. Going all the way from -4 to +6, increments of 1, and some double-ups to help ensure that 
- A way to actually roll some kind of contest between them (in this case, it's 2d6 + bonus - so I need the dice roller working)
- A way to pick random pairs of agents
- A quick matchup between two designated agents and score update between them
- A simple display of all the agents, their scores, and how many fights there have been
- A quick command that says "run X fights" and updates the scores

