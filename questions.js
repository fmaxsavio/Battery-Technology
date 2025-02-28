const questions = [
  {
    q: "Which phenomenon occurs when an electromagnetic wave propagates through a lossy transmission line?",
    options: ["Reflection", "Attenuation", "Resonance", "Interference"],
    answer: 1,
  },
  {
    q: "What causes attenuation in transmission lines?",
    options: ["Capacitance", "Inductance", "Resistance", "Conductance"],
    answer: 2,
  },
  {
    q: "What is the primary effect of dispersion in transmission lines?",
    options: ["Signal strength loss", "Signal phase shift", "Signal distortion", "Signal reflection"],
    answer: 2,
  },
  {
    q: "In a lossy transmission line, the attenuation constant is represented by which symbol?",
    options: ["α", "β", "γ", "δ"],
    answer: 0,
  },
  {
    q: "Which of the following reduces attenuation in transmission lines?",
    options: ["Increasing line length", "Increasing frequency", "Reducing conductor resistance", "Increasing dielectric loss"],
    answer: 2,
  },
  {
    q: "What type of transmission line is commonly used in high-frequency communication?",
    options: ["Coaxial cable", "Twisted pair", "Fiber optics", "Power line"],
    answer: 0,
  },
  {
    q: "Which part of a transmission line primarily contributes to dispersion?",
    options: ["Conductor", "Dielectric", "Shield", "Insulator"],
    answer: 1,
  },
  {
    q: "What is the primary cause of attenuation in coaxial cables?",
    options: ["Magnetic losses", "Conductor resistance", "Capacitive coupling", "Inductive reactance"],
    answer: 1,
  },
  {
    q: "What is the effect of increasing the frequency on the attenuation in a transmission line?",
    options: ["No effect", "Increases attenuation", "Decreases attenuation", "Increases phase velocity"],
    answer: 1,
  },
  {
    q: "What is skin effect in transmission lines?",
    options: ["Concentration of current at the center", "Concentration of current at the surface", "Current flowing in both directions", "Current cancellation"],
    answer: 1,
  },
  {
    q: "Which of the following is a type of lossy transmission line?",
    options: ["Superconductor", "Twisted pair cable", "Waveguide", "Fiber optic"],
    answer: 1,
  },
  {
    q: "How does a lossy line affect the propagation constant?",
    options: ["Increases it", "Decreases it", "Has no effect", "Reverses it"],
    answer: 0,
  },
  {
    q: "Which of the following parameters increases with frequency in a lossy line?",
    options: ["Attenuation", "Reflection", "Impedance", "Capacitance"],
    answer: 0,
  },
  {
    q: "In medical applications, which imaging technique relies on electromagnetic fields?",
    options: ["MRI", "Ultrasound", "X-rays", "CT scan"],
    answer: 0,
  },
  {
    q: "Which medical technology uses radio waves and magnetic fields to produce images of the body?",
    options: ["Ultrasound", "MRI", "X-rays", "CT scan"],
    answer: 1,
  },
  {
    q: "Which type of loss occurs due to imperfect conductors in a transmission line?",
    options: ["Dielectric loss", "Conduction loss", "Radiation loss", "Inductive loss"],
    answer: 1,
  },
  {
    q: "Which of the following is a common type of electromagnetic interference in transmission lines?",
    options: ["Capacitive coupling", "Magnetic flux", "Thermal noise", "Radiation"],
    answer: 0,
  },
  {
    q: "Which constant represents the phase shift per unit length in a transmission line?",
    options: ["Propagation constant", "Phase constant", "Attenuation constant", "Velocity constant"],
    answer: 1,
  },
  {
    q: "Which parameter describes how much power is lost in a transmission line per unit length?",
    options: ["Phase shift", "Attenuation constant", "Reflection coefficient", "Dielectric constant"],
    answer: 1,
  },
  {
    q: "What is the result of a high dielectric loss in a transmission line?",
    options: ["Reduced capacitance", "Increased signal strength", "Increased attenuation", "Reduced impedance"],
    answer: 2,
  },
  {
    q: "Which factor contributes to the dispersion of signals in optical fibers?",
    options: ["Refraction", "Interference", "Different propagation velocities", "Absorption"],
    answer: 2,
  },
  {
    q: "In transmission line theory, the parameter β is used to describe which property?",
    options: ["Attenuation", "Capacitance", "Phase constant", "Inductance"],
    answer: 2,
  },
  {
    q: "What is the common range of frequency used in MRI for medical imaging?",
    options: ["1 kHz", "1 MHz", "1 GHz", "100 MHz"],
    answer: 3,
  },
  {
    q: "Which field component is responsible for power transmission in a transmission line?",
    options: ["Electric field", "Magnetic field", "Poynting vector", "Dielectric field"],
    answer: 2,
  },
  {
    q: "Which material is commonly used as a conductor in transmission lines to reduce resistance?",
    options: ["Copper", "Aluminum", "Gold", "Iron"],
    answer: 0,
  },
  {
    q: "What happens to the wavelength of an electromagnetic wave as it travels through a lossy medium?",
    options: ["It increases", "It decreases", "It stays the same", "It fluctuates"],
    answer: 1,
  },
  {
    q: "Which type of loss occurs due to the heating of the dielectric material in transmission lines?",
    options: ["Radiation loss", "Dielectric loss", "Conduction loss", "Magnetic loss"],
    answer: 1,
  },
  {
    q: "What is the unit of the attenuation constant?",
    options: ["dB/m", "dB", "m/s", "rad/s"],
    answer: 0,
  },
  {
    q: "In a lossy transmission line, how does the signal amplitude change as it propagates?",
    options: ["Remains constant", "Decreases exponentially", "Increases linearly", "Oscillates periodically"],
    answer: 1,
  },
  {
    q: "Which type of signal experiences greater attenuation, low-frequency or high-frequency?",
    options: ["Low-frequency", "High-frequency", "Both equally", "Depends on the material"],
    answer: 1,
  },
  {
    q: "What is the main source of signal loss in optical fibers?",
    options: ["Conductor resistance", "Scattering", "Capacitive coupling", "Magnetic losses"],
    answer: 1,
  },
  {
    q: "Which of the following is a typical application of electromagnetic fields in medicine?",
    options: ["Heart rate monitoring", "MRI scanning", "Pulse oximetry", "Electrocardiography"],
    answer: 1,
  },
  {
    q: "Which factor affects the velocity of propagation in a transmission line?",
    options: ["Conductor material", "Dielectric constant", "Signal power", "Line length"],
    answer: 1,
  },
  {
    q: "Which of the following increases the attenuation in transmission lines?",
    options: ["Decreasing conductor resistance", "Reducing dielectric loss", "Increasing frequency", "Decreasing line length"],
    answer: 2,
  },
  {
    q: "In a coaxial cable, which component helps to minimize electromagnetic interference?",
    options: ["Dielectric", "Shielding", "Conductor", "Insulation"],
    answer: 1,
  },
  {
    q: "What is the role of the dielectric material in a transmission line?",
    options: ["Increase capacitance", "Reduce magnetic field", "Enhance signal strength", "Reduce impedance"],
    answer: 0,
  },
  {
    q: "Which type of loss is dominant in long-distance power transmission lines?",
    options: ["Dielectric loss", "Radiation loss", "Conduction loss", "Inductive loss"],
    answer: 2,
  },
  {
    q: "Which of the following techniques can reduce signal attenuation in a lossy transmission line?",
    options: ["Shorter line length", "Higher frequency", "Lower impedance", "More dielectric loss"],
    answer: 0,
  },
  {
    q: "In lossy transmission lines, what does the complex propagation constant account for?",
    options: ["Phase shift only", "Attenuation only", "Both attenuation and phase shift", "Signal power"],
    answer: 2,
  },
  {
    q: "Which material is commonly used for the core of a medical MRI machine?",
    options: ["Copper", "Superconducting magnets", "Aluminum", "Iron"],
    answer: 1,
  },
  {
    q: "In a lossy transmission line, what is the relationship between attenuation and distance?",
    options: ["Linear", "Exponential", "Quadratic", "Constant"],
    answer: 1,
  },
  {
    q: "Which parameter of a transmission line is most affected by dielectric loss?",
    options: ["Inductance", "Resistance", "Capacitance", "Attenuation"],
    answer: 3,
  },
  {
    q: "What type of wave propagation is observed in a waveguide?",
    options: ["TEM", "TE", "TM", "Both TE and TM"],
    answer: 3,
  },
  {
    q: "What is the dominant factor affecting signal dispersion in a lossy transmission line?",
    options: ["Impedance mismatch", "Frequency-dependent phase velocity", "Dielectric breakdown", "Conductor inductance"],
    answer: 1,
  },
  {
    q: "In medical applications, which technology uses electromagnetic waves to treat tumors?",
    options: ["MRI", "CT scan", "Radiation therapy", "Ultrasound"],
    answer: 2,
  },
  {
    q: "What happens to the signal in a transmission line if the line is too long and lossy?",
    options: ["It increases in power", "It distorts", "It reflects back", "It remains unchanged"],
    answer: 1,
  },
  {
    q: "Which of the following is a common medical application of electromagnetic waves for diagnosis?",
    options: ["Pacemaker", "X-rays", "ECG", "Electroencephalography"],
    answer: 1,
  },
  {
    q: "In a lossy transmission line, which constant represents the rate of power decay along the line?",
    options: ["Phase constant", "Attenuation constant", "Propagation constant", "Reflection constant"],
    answer: 1,
  },
  {
    q: "Which of the following affects the reflection coefficient in a transmission line?",
    options: ["Signal frequency", "Mismatch in impedance", "Conductor material", "Temperature"],
    answer: 1,
  },
  {
    q: "Which of the following is a method used to reduce dispersion in optical fibers?",
    options: ["Increasing core size", "Reducing core refractive index", "Using graded-index fibers", "Increasing the wavelength"],
    answer: 2,
  },
  {
    q: "What does the term 'loss tangent' refer to in transmission line theory?",
    options: ["Ratio of conduction to radiation losses", "Ratio of dielectric loss to stored energy", "Rate of attenuation per unit length", "Reflection coefficient"],
    answer: 1,
  },
]
