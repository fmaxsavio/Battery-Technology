const questions = [
  {
    "q": "What is the primary function of a Battery Management System (BMS)?",
    "options": ["Charging control", "Battery monitoring", "Energy storage", "Power conversion"],
    "answer": 1
  },
  {
    "q": "Which of the following is a common material used in the anode of lithium-ion batteries?",
    "options": ["Graphite", "Silicon", "Lithium cobalt oxide", "Copper"],
    "answer": 0
  },
  {
    "q": "Which battery type is most commonly used in electric vehicles?",
    "options": ["Lead-acid", "Nickel-cadmium", "Lithium-ion", "Zinc-air"],
    "answer": 2
  },
  {
    "q": "What does the term 'SoC' stand for in battery management systems?",
    "options": ["State of Charge", "State of Capacity", "State of Conductivity", "System of Charging"],
    "answer": 0
  },
  {
    "q": "Which of the following is a disadvantage of lithium-ion batteries?",
    "options": ["Low energy density", "Short cycle life", "Thermal runaway risk", "High cost"],
    "answer": 2
  },
  {
    "q": "Which type of battery uses sodium ions instead of lithium ions?",
    "options": ["Lithium-ion", "Sodium-ion", "Lead-acid", "Nickel-cadmium"],
    "answer": 1
  },
  {
    "q": "What is the primary advantage of solid-state batteries over traditional lithium-ion batteries?",
    "options": ["Lower cost", "Higher energy density", "Longer charge times", "Larger physical size"],
    "answer": 1
  },
  {
    "q": "Which of the following is a key factor that determines the efficiency of a battery?",
    "options": ["Voltage", "Capacity", "Energy density", "Current"],
    "answer": 2
  },
  {
    "q": "In a lithium-ion battery, which material is typically used for the cathode?",
    "options": ["Lithium cobalt oxide", "Graphite", "Nickel", "Copper"],
    "answer": 0
  },
  {
    "q": "What does 'cycle life' refer to in battery technology?",
    "options": ["The number of charge-discharge cycles a battery can undergo", "The time it takes to charge a battery", "The power output of the battery", "The weight of the battery"],
    "answer": 0
  },
  {
    "q": "Which of the following is the primary cause of battery degradation over time?",
    "options": ["Deep discharges", "Overcharging", "Temperature fluctuations", "All of the above"],
    "answer": 3
  },
  {
    "q": "What is the main purpose of the electrolyte in a battery?",
    "options": ["To store energy", "To conduct ions between the anode and cathode", "To prevent short-circuiting", "To maintain voltage stability"],
    "answer": 1
  },
  {
    "q": "Which of the following materials is commonly used in the construction of a battery separator?",
    "options": ["Polypropylene", "Copper", "Aluminum", "Silicon"],
    "answer": 0
  },
  {
    "q": "Which of the following is the most common electrolyte used in lithium-ion batteries?",
    "options": ["Sulfuric acid", "Sodium chloride", "Lithium salt in an organic solvent", "Water"],
    "answer": 2
  },
  {
    "q": "What does 'State of Health' (SoH) indicate in a battery?",
    "options": ["Battery voltage", "Remaining useful life", "Energy efficiency", "Total charge capacity"],
    "answer": 1
  },
  {
    "q": "Which of the following technologies is a promising alternative to lithium-ion batteries for large-scale energy storage?",
    "options": ["Solid-state batteries", "Sodium-ion batteries", "Flow batteries", "All of the above"],
    "answer": 3
  },
  {
    "q": "What is the primary role of a charge controller in a battery system?",
    "options": ["To maintain battery voltage", "To regulate battery charging and prevent overcharging", "To increase battery efficiency", "To monitor battery temperature"],
    "answer": 1
  },
  {
    "q": "Which of the following battery types is most suitable for high power applications like electric vehicles?",
    "options": ["Lead-acid", "Lithium-ion", "Nickel-metal hydride", "Zinc-air"],
    "answer": 1
  },
  {
    "q": "What is the main advantage of using lithium iron phosphate (LiFePO4) as a cathode material?",
    "options": ["Higher energy density", "Better thermal stability", "Lower cost", "Faster charge times"],
    "answer": 1
  },
  {
    "q": "Which of the following is the most energy-dense rechargeable battery technology?",
    "options": ["Nickel-cadmium", "Lithium-ion", "Lead-acid", "Nickel-metal hydride"],
    "answer": 1
  },
  {
    "q": "Which process occurs in a battery when it is discharging?",
    "options": ["Reduction at the cathode", "Oxidation at the anode", "Both oxidation and reduction", "None of the above"],
    "answer": 2
  },
  {
    "q": "Which material is most commonly used in the anode of a lead-acid battery?",
    "options": ["Graphite", "Lead dioxide", "Lead", "Nickel"],
    "answer": 2
  },
  {
    "q": "What does the term 'voltage sag' refer to in battery-powered systems?",
    "options": ["Temporary decrease in voltage", "Permanent decrease in voltage", "Increased voltage output", "Voltage spike"],
    "answer": 0
  },
  {
    "q": "Which type of battery is typically used in hybrid electric vehicles (HEVs)?",
    "options": ["Lead-acid", "Nickel-metal hydride", "Lithium-ion", "Zinc-air"],
    "answer": 1
  },
  {
    "q": "Which technology is used in the development of lithium-air batteries?",
    "options": ["Air as a cathode", "Graphene anode", "Lithium sulfate", "Sodium chloride"],
    "answer": 0
  },
  {
    "q": "Which type of battery uses gel electrolyte?",
    "options": ["Lead-acid", "Lithium-ion", "Nickel-cadmium", "Flow batteries"],
    "answer": 0
  },
  {
    "q": "What does the term 'charge rate' in a battery refer to?",
    "options": ["Time taken to discharge", "Amount of current used for charging", "Battery's energy efficiency", "Battery capacity"],
    "answer": 1
  },
  {
    "q": "Which type of battery is most commonly used in consumer electronics such as smartphones?",
    "options": ["Lithium-ion", "Nickel-cadmium", "Lead-acid", "Sodium-ion"],
    "answer": 0
  },
  {
    "q": "What is the function of a Battery Management System (BMS) in electric vehicles?",
    "options": ["To control vehicle speed", "To manage the battery’s charging and discharging processes", "To monitor fuel efficiency", "To track battery weight"],
    "answer": 1
  },
  {
    "q": "Which electrolyte is typically used in a sodium-ion battery?",
    "options": ["Lithium salt", "Sodium chloride", "Potassium hydroxide", "Zinc sulfate"],
    "answer": 1
  },
  {
    "q": "What is the typical range of cycle life for lithium-ion batteries?",
    "options": ["500-1000 cycles", "1000-2000 cycles", "2000-3000 cycles", "3000-4000 cycles"],
    "answer": 1
  },
  {
    "q": "Which of the following is a common method used to prevent battery overheating?",
    "options": ["Overcharge protection", "Cooling systems", "Battery casing", "All of the above"],
    "answer": 3
  },
  {
    "q": "Which of the following is used in the cathode material of a nickel-metal hydride (NiMH) battery?",
    "options": ["Nickel oxyhydroxide", "Lead dioxide", "Lithium cobalt oxide", "Iron phosphate"],
    "answer": 0
  },
  {
    "q": "What is the name of the phenomenon where a battery loses its charge capacity over time?",
    "options": ["Battery depletion", "Capacity fade", "Energy discharge", "Current leakage"],
    "answer": 1
  },
  {
    "q": "What type of battery is used in backup power supplies for homes and businesses?",
    "options": ["Lithium-ion", "Lead-acid", "Nickel-cadmium", "Flow batteries"],
    "answer": 1
  },
  {
    "q": "What does 'thermal runaway' refer to in a battery?",
    "options": ["Rapid increase in temperature leading to potential failure", "Slow discharge due to high temperatures", "Loss of charge efficiency", "Temperature decrease during discharge"],
    "answer": 0
  },
  {
    "q": "Which of the following batteries is used in electric grid energy storage systems?",
    "options": ["Lithium-ion", "Flow batteries", "Nickel-cadmium", "Lead-acid"],
    "answer": 1
  },
  {
    "q": "What is the main advantage of using a flow battery for energy storage?",
    "options": ["Higher energy density", "Scalability and long cycle life", "Faster charge times", "Lower initial cost"],
    "answer": 1
  },
  {
    "q": "Which battery is considered the most environmentally friendly due to its low impact on the ecosystem?",
    "options": ["Lithium-ion", "Lead-acid", "Nickel-metal hydride", "Zinc-air"],
    "answer": 3
  },
  {
    "q": "What is the role of a charge controller in renewable energy battery systems?",
    "options": ["To convert DC to AC power", "To regulate battery charging and prevent overcharging", "To provide voltage output", "To measure battery capacity"],
    "answer": 1
  },
  {
    "q": "Which of the following is a key development for improving battery performance?",
    "options": ["Reducing energy density", "Increasing battery life", "Decreasing cycle life", "Improving charge times"],
    "answer": 1
  },
  {
    "q": "Which type of battery is used in most electric vehicles for propulsion?",
    "options": ["Lead-acid", "Nickel-metal hydride", "Lithium-ion", "Sodium-ion"],
    "answer": 2
  }
]
