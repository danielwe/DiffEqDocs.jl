var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#DifferentialEquations.jl-Documentation-1",
    "page": "Home",
    "title": "DifferentialEquations.jl Documentation",
    "category": "section",
    "text": "DifferentialEquations.jl is a package for numerically solving differential equations using the various components of JuliaDiffEq. The purpose of this package is to supply efficient Julia implementations of solvers for various differential equations. Equations within the realm of this package include discrete equations (function maps, discrete stochastic simulations like Gillespie/Markov models), ordinary differential equations (ODEs), stochastic ordinary differential equations (SODEs or SDEs), stochastic partial differential equations (SPDEs), partial differential equations (with both finite difference and finite element methods), differential algebraic equations (DAEs), and differential delay equations (DDEs). The well-optimized DifferentialEquations solvers benchmark as the fastest Julia implementations, using classic algorithms and ones from recent research, and include algorithms optimized for high-precision and HPC applications.  It integrates with the Julia package sphere, for example using Juno's progress meter, automatic plotting, built-in interpolations, and wraps other differential equation solvers so that many different methods for solving the equations can be accessed by simply switching a keyword argument. It utilizes Julia's generality to be able to solve problems specified with arbitrary number types (types with units like Unitful, and arbitrary precision numbers like BigFloats and ArbFloats), arbitrary sized arrays (ODEs on matrices), and more. This gives a powerful mixture of speed and productivity features to help you solve and analyze your differential equations faster.If you have any questions, or just want to chat about solvers/using the package, please feel free to use the Gitter channel. For bug reports, feature requests, etc., please submit an issue. If you're interested in contributing, please see the Developer Documentation."
},

{
    "location": "index.html#Supporting-and-Citing-1",
    "page": "Home",
    "title": "Supporting and Citing",
    "category": "section",
    "text": "The software in this ecosystem was developed as part of academic research. If you would like to help support it, please star the repository as such metrics may help us secure funding in the future. If you use JuliaDiffEq software as part of your research, teaching, or other activities, we would be grateful if you could cite our work. Please see our citation page for guidelines."
},

{
    "location": "index.html#Using-the-Package-1",
    "page": "Home",
    "title": "Using the Package",
    "category": "section",
    "text": "To install the package, use the following command inside the Julia REPL:Pkg.add(\"DifferentialEquations\")To load the package, use the command:using DifferentialEquationsThe command Pkg.add(\"DifferentialEquations\") will add solvers and dependencies for all kind of Differential Equations (e.g. ODEs or SDEs etc., see the Supported Equations section below). If you are interested in only one type of equation solvers of DifferentialEquations.jl or simply want a more lightweight version, see the Low Dependency Usage page.To understand the package in more detail, check out the following tutorials in this manual. Example IJulia notebooks can also be found in DiffEqTutorials.jl. If you find any example where there seems to be an error, please open an issue.For the most up to date information on using the package, please join the Gitter channel.Using the bleeding edge for the latest features and development is only recommended for power users. Information on how to get to the bleeding edge is found in the developer documentation."
},

{
    "location": "index.html#Supported-Equations-1",
    "page": "Home",
    "title": "Supported Equations",
    "category": "section",
    "text": "For PDEs, one can optionally specify a noise equation. The solvers currently have stochastic variants for handling Gaussian Space-time white noise SPDEs.Discrete Equations (function maps, discrete stochastic (Gillespie/Markov) simulations)\nOrdinary Differential Equations (ODEs)\nSplit and Partitioned ODEs (Symplectic integrators, IMEX Methods)\nStochastic Differential Equations (SDEs)\nRandom Differential Equations (RDEs)\nAlgebraic Differential Equations (DAEs)\nDelay Differential Equations (DDEs)\n(Stochastic) Partial Differential Equations ((S)PDEs):\nLinear Poisson Equation\nSemi-linear Poisson Equation\nLinear Heat Equation\nSemi-linear Heat Equation (aka Reaction-Diffusion Equation)\nStationary Stokes EquationFor help with choosing a solver algorithm, please see the solver options pages."
},

{
    "location": "index.html#IJulia-Notebook-Tutorials-1",
    "page": "Home",
    "title": "IJulia Notebook Tutorials",
    "category": "section",
    "text": "You can access extra tutorials supplied in the DiffEqTutorials.jl repository. If you have IJulia installed, you can view them locally and interactively, by cloning the repository:#Pkg.add(\"IJulia\") # Need to do this the first time to install IJulia!\nPkg.clone(\"https://github.com/JuliaDiffEq/DiffEqTutorials.jl\")\nusing IJulia\nnotebook(dir = Pkg.dir(\"DiffEqTutorials\"))"
},

{
    "location": "index.html#Tutorials-1",
    "page": "Home",
    "title": "Tutorials",
    "category": "section",
    "text": "The following tutorials will introduce you to the functionality of DifferentialEquations.jl. More examples can be found by checking out the IJulia notebooks in the examples folder.Pages = [\n    \"tutorials/ode_example.md\",\n    \"tutorials/sde_example.md\",\n    \"tutorials/dde_example.md\",\n    \"tutorials/dae_example.md\",\n    \"tutorials/discrete_stochastic_example.md\",\n    \"tutorials/jump_diffusion.md\",\n    \"tutorials/fempoisson_example.md\",\n    \"tutorials/femheat_example.md\",\n    \"tutorials/femstochastic_example.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Basics-1",
    "page": "Home",
    "title": "Basics",
    "category": "section",
    "text": "These pages introduce you to the core of DifferentialEquations.jl and the common interface. It explains the general workflow, options which are generally available, and the general tools for analysis.Pages = [\n    \"basics/overview.md\",\n    \"basics/common_solver_opts.md\",\n    \"basics/solution.md\",\n    \"basics/plot.md\",\n    \"basics/integrator.md\",\n    \"basics/compatibility_chart.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Equation-Types-1",
    "page": "Home",
    "title": "Equation Types",
    "category": "section",
    "text": "These pages describe building the problem types to define differential equations for the solvers, and the special features of the different solution types.Pages = [\n  \"types/discrete_types.md\",\n  \"types/ode_types.md\",\n  \"types/refined_ode_types.md\",\n  \"types/steady_state_types.md\",\n  \"types/sde_types.md\",\n  \"types/rode_types.md\",\n  \"types/dde_types.md\",\n  \"types/dae_types.md\",\n  \"types/refined_dae_types.md\",\n  \"types/jump_types.md\",\n  \"types/fem_types.md\",\n]\nDepth = 2"
},

{
    "location": "index.html#Solver-Algorithms-1",
    "page": "Home",
    "title": "Solver Algorithms",
    "category": "section",
    "text": "These pages describe the solvers and available algorithms in detail.Pages = [\n  \"solvers/discrete_solve.md\",\n  \"solvers/ode_solve.md\",\n  \"solvers/refined_ode_solve.md\",\n  \"solvers/steady_state_solve.md\",\n  \"solvers/sde_solve.md\",\n  \"solvers/rode_solve.md\",\n  \"solvers/dde_solve.md\",\n  \"solvers/dae_solve.md\",\n  \"solvers/fempoisson_solve.md\",\n  \"solvers/femheat_solve.md\",\n]\nDepth = 2"
},

{
    "location": "index.html#Additional-Features-1",
    "page": "Home",
    "title": "Additional Features",
    "category": "section",
    "text": "These sections discuss extra performance enhancements, event handling, and other in-depth features.Pages = [\n    \"features/performance_overloads.md\",\n    \"features/diffeq_arrays.md\",\n    \"features/noise_process.md\",\n    \"features/linear_nonlinear.md\",\n    \"features/callback_functions.md\",\n    \"features/callback_library.md\",\n    \"features/monte_carlo.md\",\n    \"features/low_dep.md\",\n    \"features/mesh.md\",\n    \"features/progress_bar.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Analysis-Tools-1",
    "page": "Home",
    "title": "Analysis Tools",
    "category": "section",
    "text": "Because DifferentialEquations.jl has a common interface on the solutions, it is easy to add functionality to the entire DiffEq ecosystem by developing it to the solution interface. These pages describe the add-on analysis tools which are available.Pages = [\n    \"analysis/parameterized_functions.md\",\n    \"analysis/parameter_estimation.md\",\n    \"analysis/bifurcation.md\",\n    \"analysis/sensitivity.md\",\n    \"analysis/uncertainty_quantification.md\",\n    \"analysis/dev_and_test.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Modeling-Tools-1",
    "page": "Home",
    "title": "Modeling Tools",
    "category": "section",
    "text": "While DifferentialEquations.jl can be used to directly build any differential or difference equation (/ discrete stochastic) model, in many cases it can be helpful to have a tailored-built API for making certain types of common models easier. This is provided by the modeling functionality.Pages = [\n    \"models/multiscale.md\",\n    \"models/financial.md\",\n    \"models/biological.md\"\n]\nDepth = 2"
},

{
    "location": "tutorials/ode_example.html#",
    "page": "Ordinary Differential Equations",
    "title": "Ordinary Differential Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/ode_example.html#Ordinary-Differential-Equations-1",
    "page": "Ordinary Differential Equations",
    "title": "Ordinary Differential Equations",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving ODEs. Other introductions can be found by checking out DiffEqTutorials.jl.In this example we will solve the equationfracdudt = f(tu)on the time interval tin01 where f(tu)=u. We know via Calculus that the solution to this equation is u(t)=uexp(t). To solve this numerically, we define a problem type by giving it the equation, the initial condition, and the timespan to solve over:using DifferentialEquations\nα=1\nu0=1/2\nf(t,u) = α*u\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)Note that DifferentialEquations.jl will choose the types for the problem based on the types used to define the problem type. For our example, notice that u0 is a Float64, and therefore this will solve with the dependent variables being Float64. Since tspan = (0.0,1.0) is a tuple of Float64's, the independent variabes will be solved using Float64's (note that the start time and end time must match types). You can use this to choose to solve with arbitrary precision numbers, unitful numbers, etc. Please see the tutorials for more details.After defining a problem, you solve it using solve.sol = solve(prob)DifferentialEquations.jl has a method for choosing the default solver algorithm and the (adaptive) stepsizes dt, and so this will find an efficient method to solve your problem. You can also explicitly choose an algorithm and pass in some parameters.sol = solve(prob,Euler(),dt=1/2^4)In this case I chose to use the classic Euler method, and gave it a stepsize dt=1/2^4. Normally dt is the starting stepsize but since the Euler method is not adaptive this is the stepsize for the calculation. The available options are described on the Common Solver Options manual page.The result of solve is a solution object. We can access the 5th value of the solution withsol[5] #.637or get the time of the 8th timestep bysol.t[8]\n#.438Convenience features are also included. We can build an array using a comprehension over the solution tuples via[t+u for (t,u) in tuples(sol)]or more generally[t+2u for (t,u) in zip(sol.t,sol.u)]allows one to use more parts of the solution type. The object that is returned by default acts as a continuous solution via an interpolation. We can access the interpolated values by treating sol as a function, for example:sol(0.45) # The value of the solution at t=0.45For details on more finely controlling the output, see the Output Specification manual pagePlotting commands are provided via a recipe to Plots.jl. To plot the solution object, simply call plot:#Pkg.add(\"Plots\") # You need to install Plots.jl before your first time using it!\nusing Plots\n#gr() # You can optionally choose a plotting backend\nplot(sol)If you are in Juno, this will plot to the plot pane. To open an interactive GUI (dependent on the backend), use the gui command:gui()The plot function can be formatted using the attributes available in Plots.jl. For more of an introduction to plotting solutions, see the IJulia notebook."
},

{
    "location": "tutorials/ode_example.html#Other-Algorithms-1",
    "page": "Ordinary Differential Equations",
    "title": "Other Algorithms",
    "category": "section",
    "text": "DifferentialEquations.jl offers a much wider variety of solver algorithms than traditional differential equations libraries. Many of these algorithms are from recent research and have been shown to be more efficient than the \"standard\" algorithms (which are also available). For example, we can choose a 7th order Verner Efficient method:sol = solve(prob,Vern7())\nplot(sol,title=\"Solving using the Vern7 Method\")(Image: Better ODE Solution)Because these advanced algorithms may not be known to most users, DifferentialEquations.jl offers an advanced method for choosing algorithm defaults. This algorithm utilizes the precisions of the number types and the keyword arguments (such as the tolerances) to select an algorithm. Additionally one can provide alg_hints to help choose good defaults using properties of the problem and necessary features for the solution. For example, if we have a stiff problem but don't know the best stiff algorithm for this problem, we can usesol = solve(prob,alg_hints=[:stiff])Please see the solver documentation for details on the algorithms and recommendations."
},

{
    "location": "tutorials/ode_example.html#Systems-of-Equations-1",
    "page": "Ordinary Differential Equations",
    "title": "Systems of Equations",
    "category": "section",
    "text": "We can also solve systems of equations. DifferentialEquations.jl can handle many different dependent variable types (generally, anything with a linear index should work!). So instead of solving a vector equation, let's let u be a matrix! To do this, we simply need to have u₀ be a matrix, and define f such that it takes in a matrix and outputs a matrix. We can define a matrix of linear ODEs as follows:A = [1. 0 0 -5\n     4 -2 4 -3\n     -4 0 0 1\n     5 -2 2 3]\nu0 = rand(4,2)\ntspan = (0.0,1.0)\nf(t,u) = A*u\nprob = ODEProblem(f,u0,tspan)Here our ODE is on a 4x2 matrix, and the ODE is the linear system defined by multiplication by A. To solve the ODE, we do the same steps as before.sol = solve(prob)\nplot(sol)(Image: ODE System Solution)Note that the analysis tools generalize over to systems of equations as well.sol[4]still returns the solution at the fourth timestep. It also indexes into the array as well. The last value is the timestep, and the beginning values are for the component. This meanssol[5,3]is the value of the 5th component (by linear indexing) at the 3rd timepoint, orsol[2,1,:]is the timeseries for the component which is the 2nd row and 1 column."
},

{
    "location": "tutorials/ode_example.html#In-Place-Updates-1",
    "page": "Ordinary Differential Equations",
    "title": "In-Place Updates",
    "category": "section",
    "text": "Defining your ODE function to be in-place updating can have performance benefits. What this means is that, instead of writing a function which outputs its solution, write a function which updates a vector that is designated to hold the solution. By doing this, DifferentialEquations.jl's solver packages are able to reduce the amount of array allocations and achieve better performance.For our example we will use the Lorenz system. What we do is simply write the output to the 3rd input of the function. For example:function lorenz(t,u,du)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nendand then we can use this function in a problem:u0 = [1.0;0.0;0.0]\ntspan = (0.0,1.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob)(Image: Lorenz System)"
},

{
    "location": "tutorials/ode_example.html#Defining-Systems-of-Equations-Using-ParameterizedFunctions.jl-1",
    "page": "Ordinary Differential Equations",
    "title": "Defining Systems of Equations Using ParameterizedFunctions.jl",
    "category": "section",
    "text": "To simplify your life, ParameterizedFunctions.jl provides the @ode_def macro for \"defining your ODE in pseudocode\" and getting a function which is efficient and runnable.To use the macro, you write out your system of equations with the left-hand side being d_ and those variables will be parsed as the dependent variables. The independent variable is t, and the other variables are parameters which you pass at the end. For example, we can write the Lorenz system as:using ParameterizedFunctions\ng = @ode_def LorenzExample begin\n  dx = σ*(y-x)\n  dy = x*(ρ-z) - y\n  dz = x*y - β*z\nend σ=>10.0 ρ=>28.0 β=(8/3)DifferentialEquations.jl will automatically translate this to be exactly the same as f. The result is more legible code with no performance loss. The result is that g is a function which you can now use to define the Lorenz problem.u0 = [1.0;0.0;0.0]\ntspan = (0.0,1.0)\nprob = ODEProblem(g,u0,tspan)Since we used =>, σ and ρ are kept as mutable parameters. For example we can do:g.σ = 11.0to change the value of σ to 11.0. β is not able to be changed since we defined it using =. We can create a new instance with new parameters via the name used in the @ode_def command:h = LorenzExample(σ=11.0,ρ=25.0)Note that the values will default to the values given to the @ode_def command.One last item to note is that you probably received a warning when defining this:WARNING: Hessian could not invertThis is because the Hessian of the system was not able to be inverted. ParameterizedFunctions.jl does \"behind-the-scenes\" symbolic calculations to pre-compute things like the Jacobian, inverse Jacobian, etc. in order to speed up calculations. Thus not only will this lead to legible ODE definitions, but \"unfairly fast\" code! We can turn off some of the calculations by using a more specific macro. Here, we can turn off the Hessian calculations via @ode_def_nohes. See ParameterizedFunctions.jl for more details.Since the parameters exist within the function, functions defined in this manner can also be used for sensitivity analysis, parameter estimation routines, and bifurcation plotting. This makes DifferentialEquations.jl a full-stop solution for differential equation analysis which also achieves high performance."
},

{
    "location": "tutorials/sde_example.html#",
    "page": "Stochastic Differential Equations",
    "title": "Stochastic Differential Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/sde_example.html#Stochastic-Differential-Equations-1",
    "page": "Stochastic Differential Equations",
    "title": "Stochastic Differential Equations",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SDEs. Other introductions can be found by checking out DiffEqTutorials.jl. This tutorial assumes you have read the Ordinary Differential Equations tutorial."
},

{
    "location": "tutorials/sde_example.html#Basics-1",
    "page": "Stochastic Differential Equations",
    "title": "Basics",
    "category": "section",
    "text": "In this example we will solve the equationdu = f(tu)dt + g(tu)dWwhere f(tu)=u and g(tu)=u. We know via Stochastic Calculus that the solution to this equation is u(tW)=uexp((-frac^22)t+W). To solve this numerically, we define a problem type by giving it the equation and the initial condition:using DifferentialEquations\nα=1\nβ=1\nu₀=1/2\nf(t,u) = α*u\ng(t,u) = β*u\ndt = 1//2^(4)\ntspan = (0.0,1.0)\nprob = SDEProblem(f,g,u₀,(0.0,1.0))The solve interface is then the same as with ODEs. Here we will use the classic Euler-Maruyama algorithm EM and plot the solution:sol = solve(prob,EM(),dt=dt)\nusing Plots; plotly() # Using the Plotly backend\nplot(sol)(Image: Basic Solution)"
},

{
    "location": "tutorials/sde_example.html#Higher-Order-Methods-1",
    "page": "Stochastic Differential Equations",
    "title": "Higher Order Methods",
    "category": "section",
    "text": "One unique feature of DifferentialEquations.jl is that higher-order methods for stochastic differential equations are included. For reference, let's also give the SDEProblem the analytical solution. We can do this by making a test problem. This can be a good way to judge how accurate the algorithms are, or is used to test convergence of the algorithms for methods developers. Thus we define the problem object with:analytic(t,u₀,W) = u₀*exp((α-(β^2)/2)*t+β*W)\nprob = SDETestProblem(f,g,u₀,analytic)and then we pass this information to the solver and plot:#We can plot using the classic Euler-Maruyama algorithm as follows:\nsol =solve(prob,EM(),dt=dt)\nplot(sol,plot_analytic=true)(Image: SDE Solution)We can choose a higher-order solver for a more accurate result:sol =solve(prob,SRIW1(),dt=dt,adaptive=false)\nplot(sol,plot_analytic=true)(Image: Better SDE Solution)By default, the higher order methods have adaptivity. Thus one can usesol =solve(prob,SRIW1())\nplot(sol,plot_analytic=true)(Image: Better Automatic Solution)Here we allowed the solver to automatically determine a starting dt. This estimate at the beginning is conservative (small) to ensure accuracy. We can instead start the method with a larger dt by passing in a value for the starting dt:sol =solve(prob,SRIW1(),dt=dt)\nplot(sol,plot_analytic=true)(Image: Better Automatic Solution)"
},

{
    "location": "tutorials/sde_example.html#Non-Diagonal-Noise-1",
    "page": "Stochastic Differential Equations",
    "title": "Non-Diagonal Noise",
    "category": "section",
    "text": "All of the previous examples had diagonal noise, that is a vector of random numbers dW whose size matches the output of g, and the noise is applied element-wise. However, a more general type of noise allows for the terms to linearly mixed.Let's define a problem with four Wiener processes and two dependent random variables. In this case, we will want the output of g to be a 2x4 matrix, such that the solution is g(t,u)*dW, the matrix multiplication. For example, we can do the following:f = (t,u,du) -> du.=1.01u\ng = function (t,u,du)\n  du[1,1] = 0.3u[1]\n  du[1,2] = 0.6u[1]\n  du[1,3] = 0.9u[1]\n  du[1,4] = 0.12u[2]\n  du[2,1] = 1.2u[1]\n  du[2,2] = 0.2u[2]\n  du[2,3] = 0.3u[2]\n  du[2,4] = 1.8u[2]\nend\nprob = SDEProblem(f,g,ones(2),(0.0,1.0),noise_rate_prototype=zeros(2,4))In our g we define the functions for computing the values of the matrix. The matrix itself is determined by the keyword argument noise_rate_prototype in the SDEProblem constructor. This is a prototype for the type that du will be in g. This can be any AbstractMatrix type. Thus for example, we can define the problem as\n# Define a sparse matrix by making a dense matrix and setting some values as not zero\nA = zeros(2,4)\nA[1,1] = 1\nA[1,4] = 1\nA[2,4] = 1\nsparse(A)\n\n# Make `g` write the sparse matrix values\ng = function (t,u,du)\n  du[1,1] = 0.3u[1]\n  du[1,4] = 0.12u[2]\n  du[2,4] = 1.8u[2]\nend\n\n# Make `g` use the sparse matrix\nprob = SDEProblem(f,g,ones(2),(0.0,1.0),noise_rate_prototype=A)and now g(t,u) writes into a sparse matrix, and g(t,u)*dW is sparse matrix multiplication."
},

{
    "location": "tutorials/rode_example.html#",
    "page": "Random Ordinary Differential Equations",
    "title": "Random Ordinary Differential Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/rode_example.html#Random-Ordinary-Differential-Equations-1",
    "page": "Random Ordinary Differential Equations",
    "title": "Random Ordinary Differential Equations",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving RODEs. Other introductions can be found by checking out DiffEqTutorials.jl."
},

{
    "location": "tutorials/rode_example.html#Basics-1",
    "page": "Random Ordinary Differential Equations",
    "title": "Basics",
    "category": "section",
    "text": "In this example we will solve the equationdu = f(tuy)dtwhere f(tuW)=2usin(W) and W(t) is a Wiener process (Gaussian process).using DifferentialEquations\nfunction f(t,u,W)\n  2u*sin(W)\nend\nu0 = 1.00\ntspan = (0.0,5.0)\nprob = RODEProblem(f,u0,tspan)\nsol = solve(prob,RandomEM(),dt=1/100)(Image: intro_rode)The random process defaults to a Gaussian/Wiener process, so there is nothing else required here! See the documentation on NoiseProcesses for details on how to define other noise proceses."
},

{
    "location": "tutorials/rode_example.html#System-of-RODEs-1",
    "page": "Random Ordinary Differential Equations",
    "title": "System of RODEs",
    "category": "section",
    "text": "As with the other problem types, there is an in-place version which is more efficient for systems. The signature is f(t,u,W,du). For example,using DifferentialEquations\nfunction f(t,u,W,du)\n  du[1] = 2u[1]*sin(W[1] - W[2])\n  du[2] = -2u[2]*cos(W[1] + W[2])\nend\nu0 = [1.00;1.00]\ntspan = (0.0,5.0)\nprob = RODEProblem(f,u0,tspan)\nsol = solve(prob,RandomEM(),dt=1/100)(Image: rode_system)By default, the size of the noise process matches the size of u0. However, you can use the rand_prototype keyword to explicitly set the size of the random process:f = function (t,u,W,du)\n  du[1] = -2W[3]*u[1]*sin(W[1] - W[2])\n  du[2] = -2u[2]*cos(W[1] + W[2])\nend\nu0 = [1.00;1.00]\ntspan = (0.0,5.0)\nprob = RODEProblem(f,u0,tspan,rand_prototype=zeros(3))\nsol = solve(prob,RandomEM(),dt=1/100)(Image: noise_choice)"
},

{
    "location": "tutorials/dde_example.html#",
    "page": "Delay Differential Equations",
    "title": "Delay Differential Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/dde_example.html#Delay-Differential-Equations-1",
    "page": "Delay Differential Equations",
    "title": "Delay Differential Equations",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving delay differential equations. This tutorial assumes you have read the Ordinary Differential Equations tutorial.Delay differential equations are equations which have a delayed argument. To allow for specifying the delayed argument, the function definition for a delay differential equation is expanded to include a history function h(t) which uses interpolations throughout the solution's history to form a continuous extension of the solver's past. The function signature for a delay differential equation is f(t,u,h) for not in-place computations, and f(t,u,h,du) for in-place computations.In this example we will solve a model of breast cancer growth kinetics:beginalign\ndx_0 = fracv_01+beta_0left(x_2(t-tau)right)^2left(p_0-q_0right)x_0(t)-d_0x_0(t)\ndx_1 = fracv_01+beta_0left(x_2(t-tau)right)^2left(1-p_0+q_0right)x_0(t)\n       + fracv_11+beta_1left(x_2(t-tau)right)^2left(p_1-q_1right)x_1(t)-d_1x_1(t)\ndx_2 = fracv_11+beta_1left(x_2(t-tau)right)^2left(1-p_1+q_1right)x_1(t)-d_2x_2(t)\nendalignFor this problem we note that tau is constant, and thus we can use a method which exploits this behavior. We first write out the equation using the appropriate function signature. Most of the equation writing is the same, though we use the history function by first interpolating and then choosing the components. Thus the ith component at time t-tau is given by h(t-tau)[i]. Components with no delays are written as in the ODE.Thus, the function for this model is given by:const p0 = 0.2; const q0 = 0.3; const v0 = 1; const d0 = 5\nconst p1 = 0.2; const q1 = 0.3; const v1 = 1; const d1 = 1\nconst d2 = 1; const beta0 = 1; const beta1 = 1; const tau = 1\nfunction bc_model(t,u,h,du)\n  du[1] = (v0/(1+beta0*(h(t-tau)[3]^2))) * (p0 - q0)*u[1] - d0*u[1]\n  du[2] = (v0/(1+beta0*(h(t-tau)[3]^2))) * (1 - p0 + q0)*u[1] +\n          (v1/(1+beta1*(h(t-tau)[3]^2))) * (p1 - q1)*u[2] - d1*u[2]\n  du[3] = (v1/(1+beta1*(h(t-tau)[3]^2))) * (1 - p1 + q1)*u[2] - d2*u[3]\nendTo use the constant lag model, we have to declare the lags. Here we will use tau=1.lags = [tau]Now we build a ConstantLagDDEProblem.  The signature is very similar to ODEs, where we now have to give the lags and an h. h is the history function, or a function that declares what the values were before the time the model starts. Here we will assume that for all time before t0 the values were 1:h(t) = ones(3)We have h output a 3x1 vector since our differential equation is given by a system of the same size. Next, we choose to solve on the timespan (0.0,10.0) and create the problem type:tspan = (0.0,10.0)\nu0 = [1.0,1.0,1.0]\nprob = ConstantLagDDEProblem(bc_model,h,u0,lags,tspan)An efficient way to solve this problem (given the constant lags) is with the MethodOfSteps solver. Through the magic that is Julia, it translates an OrdinaryDiffEq.jl ODE solver method into a method for delay differential equations which is highly efficient due to sweet compiler magic. A good choice is the order 5 Tsit5() method:alg = MethodOfSteps(Tsit5())For lower tolerance solving, one can use the BS3() algorithm to good effect (this combination is similar to the MATLAB dde23), and for high tolerances the DP8() algorithm will give an 8th order solution. Note that the Verner methods will not work here due to their lazy interpolation scheme.To solve the problem with this algorithm, we do the same thing we'd do with other methods on the common interface:sol = solve(prob,alg)Note that everything available to OrdinaryDiffEq.jl can be used here, including event handling and other callbacks. The solution object has the same interface as for ODEs. For example, we can use the same plot recipes to view the results:using Plots; plot(sol)(Image: DDE Example Plot)"
},

{
    "location": "tutorials/dde_example.html#State-Dependent-Delays-1",
    "page": "Delay Differential Equations",
    "title": "State-Dependent Delays",
    "category": "section",
    "text": "State-dependent delays are problems where the delay is allowed to be a function of the current state. To do this in DifferentialEquations.jl, one simply writes it in the natural manner h(g(t,u)) where g is the lag function. As before, you must declare the lag functions to the solver. Other than that, everything else is the same, where one instead constructs a DDEProblem type:prob = DDEProblem(f,h,u0,lags,tspan)and solves that using the common interface.However, currently there are no good algorithms for this. The developers are working on a defect control method which will give good quality results and have strict error bounds."
},

{
    "location": "tutorials/dae_example.html#",
    "page": "Differential Algebraic Equations",
    "title": "Differential Algebraic Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/dae_example.html#Differential-Algebraic-Equations-1",
    "page": "Differential Algebraic Equations",
    "title": "Differential Algebraic Equations",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving DAEs. Other introductions can be found by checking out DiffEqTutorials.jl. This tutorial assumes you have read the Ordinary Differential Equations tutorial.In this example we will solve the implicit ODE equationf(tudu) = 0where f is the a variant of the Roberts equation. This equations is actually of the formbeginalign\ndu = f(tu) \n 0 = g(tu) \n endalignor is also known as a constrained differential equation where g is the constraint equation. The Roberts model can be written in the form:beginalign\ndy_1 = -004y + 10^4 y_2 y_3 \ndy_2 = 004 y_1 - 10^4 y_2 y_3 - 3*10^7 y_2^2 \n1 =  y_1  y_2 + y_3 \nendalignwith initial conditions y_1(0) = 1, y_2(0) = 0, y_3(0) = 0, dy_1 = - 004, dy_2 = 004, and dy_3 = 00.The workflow for DAEs is the same as for the other types of equations, where all you need to know is how to define the problem. A DAEProblem is specified by defining an in-place update f(t,u,du,out) which uses the values to mutate out as the output. To makes this into a DAE, we move all of the variables to one side. Thus we can define the function:f = function (t,u,du,out)\n  out[1] = - 0.04u[1]              + 1e4*u[2]*u[3] - du[1]\n  out[2] = + 0.04u[1] - 3e7*u[2]^2 - 1e4*u[2]*u[3] - du[2]\n  out[3] = u[1] + u[2] + u[3] - 1.0\nendwith initial conditonsu₀ = [1.0, 0, 0]\ndu₀ = [-0.04, 0.04, 0.0]\ntspan = (0.0,100000.0)and make the DAEProblem:using DifferentialEquations\nprob = DAEProblem(f,u₀,du₀,tspan)As with the other DifferentialEquations problems, the commands are then to solve and plot. Here we will use the IDA solver from Sundials:sol = solve(prob,IDA())\nusing Plots; plotly() # Using the Plotly backend\nplot(sol)which, despite how interesting the model looks, produces a relatively simple output:(Image: IntroDAEPlot)"
},

{
    "location": "tutorials/discrete_stochastic_example.html#",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Discrete Stochastic (Gillespie) Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/discrete_stochastic_example.html#Discrete-Stochastic-(Gillespie)-Equations-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Discrete Stochastic (Gillespie) Equations",
    "category": "section",
    "text": "In this tutorial we will describe how to define and solve discrete stochastic simulations, also known in biological fields as Gillespie-type models. This tutorial assumes you have read the Ordinary Differential Equations tutorial. Discrete stochastic simulations are a form of jump equation with a \"trivial\" (non-existent) differential equation. We will first demonstrate how to build these types of models using the biological modeling functionality, and then describe how to build it directly and more generally using jumps, and finally show how to add discrete stochastic simulations to differential equation models."
},

{
    "location": "tutorials/discrete_stochastic_example.html#Defining-a-Model-using-Reactions-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Defining a Model using Reactions",
    "category": "section",
    "text": "For our example, we will build an SIR model which matches the tutorial from  Gillespie.jl. SIR stands for susceptible, infected, and recovered, and is a model is disease spread. When a susceptible person comes in contact with an infected person, the disease has a chance of infecting the susceptible person. This \"chance\" is determined by the number of susceptible persons and the number of infected persons, since when there are more people there is a greater chance that two come in contact. Normally, the rate is modeled as the amountrate_constant*num_of_susceptible_people*num_of_infected_peopleThe rate_constant is some constant determined by other factors like the type of the disease.Let's build our model using a vector u, and let u[1] be the number of susceptible persons, u[2] be the number of infected persons, and u[3] be the number of recovered persons. In this case, we can re-write our rate as being:rate_constant*u[1]*u[2]Thus we have that our \"reactants\" are components 1 and 2. When this \"reaction\" occurs, the result is that one susceptible person turns into an infected person. We can think of this as doing:u[1] -= 1\nu[2] += 1that is, we decrease the number of susceptible persons by 1 and increase the number of infected persons by 1.These are the facts that are required to build a Reaction. The constructor for a Reaction is as follows:Reaction(rate_constant,reactants,stoichiometry)The first value is the rate constant. We will use 1e-4. Secondly, we pass in the indices for the reactants. In this case, since it uses the susceptible and infected persons, the indices are [1,2]. Lastly, we detail the stoichometric changes. These are tuples (i,j) where i is the reactant and j is the number to change by. Thus (1,-1) means \"decrease the number of susceptible persons by 1\" and (2,1) means \"increase the number of infected persons by 1\".Therefore, in total, our reaction is:r1 = Reaction(1e-4,[1,2],[(1,-1),(2,1)])To finish the model, we define one more reaction. Over time, infected people become less infected. The chance that any one person heals during some time unit depends on the number of people who are infected. Thus the rate at which infected persons are turning into recovered persons israte_constant*u[2]When this happens, we lose one infected person and gain a recovered person. This reaction is thus modeled as:r2 = Reaction(0.01,[2],[(2,-1),(3,1)])where we have chosen the rate constant 0.01."
},

{
    "location": "tutorials/discrete_stochastic_example.html#Building-and-Solving-the-Problem-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Building and Solving the Problem",
    "category": "section",
    "text": "First, we have to define some kind of differential equation. Since we do not want any continuous changes, we will build a DiscreteProblem. We do this by giving the constructor u0, the initial condition, and tspan, the timespan. Here, we will start with 999 susceptible people, 1 infected person, and 0 recovered people, and solve the problem from t=0.0 to t=250.0. Thus we build the problem via:prob = DiscreteProblem([999,1,0],(0.0,250.0))Now we have to add the reactions/jumps to the problem. We do this using a GillespieProblem. This takes in a differential equation problem prob (which we just defined), a ConstantJumpAggregator, and the reactions. The ConstantJumpAggregator is the method by which the constant jumps are aggregated together and solved. In this case we will use the classic Direct method due to Gillespie, also known as GillespieSSA. This aggregator is denoted by Direct(). Thus we build the jumps into the problem via:jump_prob = GillespieProblem(prob,Direct(),r1,r2)This is now a problem that can be solved using the differential equations solvers. Since our problem is discrete, we will use the Discrete() method.sol = solve(jump_prob,Discrete())This solve command takes the standard commands of the common interface, and the solution object acts just like any other differential equation solution. Thus there exists a plot recipe, which we can plot with:using Plots; plot(sol)(Image: gillespie_solution)"
},

{
    "location": "tutorials/discrete_stochastic_example.html#Defining-the-Jumps-Directly-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Defining the Jumps Directly",
    "category": "section",
    "text": "Instead of using the biological modeling functionality of Reaction, we can directly define jumps. This allows for more general types of rates, at the cost of some modeling friendliness. The constructor for a ConstantRateJump is:jump = ConstantRateJump(rate,affect!)where rate is a function rate(t,u) and affect! is a function of the integrator affect!(integrator) (for details on the integrator, see the integrator interface docs). Thus, to define the jump equivalents to the above reactions, we can use:rate = (t,u) -> (0.1/1000.0)*u[1]*u[2]\naffect! = function (integrator)\n  integrator.u[1] -= 1\n  integrator.u[2] += 1\nend\njump = ConstantRateJump(rate,affect!)\n\nrate = (t,u) -> 0.01u[2]\naffect! = function (integrator)\n  integrator.u[2] -= 1\n  integrator.u[3] += 1\nend\njump2 = ConstantRateJump(rate,affect!)We can then use JumpProblem to augment a problem with jumps. To add the jumps to the DiscreteProblem and solve it, we would simply do:jump_prob = JumpProblem(prob,Direct(),jump,jump2)\nsol = solve(jump_prob,Discrete(apply_map=false))"
},

{
    "location": "tutorials/discrete_stochastic_example.html#Adding-Jumps-to-a-Differential-Equation-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Adding Jumps to a Differential Equation",
    "category": "section",
    "text": "Notice that if we instead used some form of differential equation instead of a DiscreteProblem, we would add the jumps/reactions to the differential equation. Let's define an ODE problem, where the continuous part only acts on some new 4th component:f = function (t,u,du)\n  du[4] = u[2]*u[3]/100000 - u[1]*u[2]/100000\nend\n\nprob = ODEProblem(f,[999.0,1.0,0.0,100.0],(0.0,250.0))Notice we gave the 4th component a starting value of 100. The same steps as above will thus solve this hybrid equation. For example, we can solve it using the Tsit5() method via:jump_prob = GillespieProblem(prob,Direct(),r1,r2)\nsol = solve(jump_prob,Tsit5())(Image: gillespie_ode)"
},

{
    "location": "tutorials/discrete_stochastic_example.html#Caution-about-Constant-Rate-Jumps-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Caution about Constant Rate Jumps",
    "category": "section",
    "text": "Note that the assumption which is required for constant rate jumps is that their reaction rates must be constant on the interval between any constant rate jumps. Thus in the examples above,rate = (t,u) -> (0.1/1000.0)*u[1]*u[2]\nrate = (t,u) -> 0.01u[2]both must be constant other than changes due to some constant rate jump (the same applies to reactions). Since these rates only change when u[1] or u[2] is changed, and u[1] and u[2] only change when one of the jumps occur, this setup is valid. However, t*(0.1/1000.0)*u[1]*u[2] would not be valid because the rate would change during the interval, as would (0.1/1000.0)*u[1]*u[4]. Thus one must be careful about to follow this rule when choosing rates.(but note that it's okay for u[4] to depend on the other variables because its updated in a continuous manner!)If your problem must have the rates depend on a continuously changing quantity, you need to use the VariableRateJump or VariableRateReaction instead."
},

{
    "location": "tutorials/discrete_stochastic_example.html#Adding-a-VariableRateReaction-1",
    "page": "Discrete Stochastic (Gillespie) Equations",
    "title": "Adding a VariableRateReaction",
    "category": "section",
    "text": "Now let's consider adding a reaction whose rate changes continuously with the differential equation. To continue our example, let's let there be a new reaction which has the same effect as r2, but now is dependent on the amount of u[4].r3 = VariableRateReaction(1e-2,[4],[(2,-1),(3,1)])We would expect this reaction to increase the amount of transitions from state 2 to 3. Solving the equation is exactly the same:prob = ODEProblem(f,[999.0,1.0,0.0,1.0],(0.0,250.0))\njump_prob = GillespieProblem(prob,Direct(),r1,r2,r3)\nsol = solve(jump_prob,Tsit5())(Image: variable_rate_gillespie)Notice that this increases the amount of 3 at the end, reducing the falloff in the rate (though this model is kind of nonsensical).Note that even if the problem is a DiscreteProblem, VariableRateJumps and VariableRateReactions require a continuous solver, like an ODE/SDE/DDE/DAE solver.Lastly, we are not restricted to ODEs. For example, we can solve the same jump problem except with multiplicative noise on u[4] by using an SDEProblem instead:g = function (t,u,du)\n  du[4] = 0.1u[4]\nend\n\nprob = SDEProblem(f,g,[999.0,1.0,0.0,1.0],(0.0,250.0))\njump_prob = GillespieProblem(prob,Direct(),r1,r2,r3)\nsol = solve(jump_prob,SRIW1())(Image: sde_gillespie)"
},

{
    "location": "tutorials/jump_diffusion.html#",
    "page": "Jump Diffusion Equations",
    "title": "Jump Diffusion Equations",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/jump_diffusion.html#Jump-Diffusion-Equations-1",
    "page": "Jump Diffusion Equations",
    "title": "Jump Diffusion Equations",
    "category": "section",
    "text": "This tutorial assumes you have read the Ordinary Differential Equations tutorial.Jump Diffusion equations are stochastic diffeential equations with discontinuous jumps. These can be written as:fracdudt = f(tu) + g(ut)dW +  h_i(tu)N_i(t)where N_i is a Poisson-counter which denotes jumps of size h_i. In this tutorial we will show how to solve problems with even more general jumps."
},

{
    "location": "tutorials/jump_diffusion.html#Defining-a-ConstantRateJump-Problem-1",
    "page": "Jump Diffusion Equations",
    "title": "Defining a ConstantRateJump Problem",
    "category": "section",
    "text": "To start, let's solve an ODE with constant rate jumps. A jump is defined as being \"constant rate\" if the rate is only dependent on values from other constant rate jumps, meaning that its rate must not be coupled with time or the solution to the differential equation. However, these types of jumps are cheaper to compute.(Note: if your rate is only \"slightly\" dependent on the solution of the differential equation, then it may be okay to use a ConstantRateJump. Accuracy loss will be related to the percentage that the rate changes over the jump intervals.)Let's solve the following problem. We will have a linear ODE with a Poisson counter of rate 2 (which is the mean and variance), where at each jump the current solution will be halved. To solve this problem, we first define the ODEProblem:f = function (t,u,du)\n  du[1] = u[1]\nend\n\nprob = ODEProblem(f,[0.2],(0.0,10.0))Notice that, even though our equation is on 1 number, we define it using the in-place array form. Variable rate jump equations will require this form. Note that for this tutorial we solve a one-dimensional problem, but the same syntax applies for solving a system of differential equations with multiple jumps.Now we define our rate equation for our jump. Since it's just the constant value 2, we do:rate = (t,u) -> 2Now we define the affect! of the jump. This is the same as an affect! from a DiscreteCallback, and thus acts directly on the integrator. Therefore, to make it halve the current value of u, we do:affect! = (integrator) -> (integrator.u[1] = integrator.u[1]/2)Then we build our jump:jump = ConstantRateJump(rate,affect!)Next, we extend our ODEProblem to a JumpProblem by attaching the jump:jump_prob = JumpProblem(prob,Direct(),jump)We can now solve this extended problem using any ODE solver:sol = solve(jump_prob,Tsit5())\nplot(sol)(Image: constant_rate_jump)"
},

{
    "location": "tutorials/jump_diffusion.html#Variable-Rate-Jumps-1",
    "page": "Jump Diffusion Equations",
    "title": "Variable Rate Jumps",
    "category": "section",
    "text": "Now let's define a jump which is coupled to the differential equation. Let's let the rate be the current value of the solution, that is:rate = (t,u) -> u[1]Using the same affect!affect! = (integrator) -> (integrator.u[1] = integrator.u[1]/2)we build a VariableRateJump:jump = VariableRateJump(rate,affect!)To make things interesting, let's copy this jump:jump2 = deepcopy(jump)so that way we have two independent jump processes. We now couple these jumps to the ODEProblem:jump_prob = JumpProblem(prob,Direct(),jump,jump2)which we once again solve using an ODE solver:sol = solve(jump_prob,Tsit5())\nplot(sol)(Image: variable_rate_jump)"
},

{
    "location": "tutorials/jump_diffusion.html#Jump-Diffusion-1",
    "page": "Jump Diffusion Equations",
    "title": "Jump Diffusion",
    "category": "section",
    "text": "Now we will finally solve the jump diffusion problem. The steps are the same as before, except we now start with a SDEProblem instead of an ODEProblem. Using the same drift function f as before, we add multiplicative noise via:g = function (t,u,du)\n  du[1] = u[1]\nend\n\nprob = SDEProblem(f,g,[0.2],(0.0,10.0))and couple it to the jumps:jump_prob = JumpProblem(prob,Direct(),jump,jump2)We then solve it using an SDE algorithm:sol = solve(jump_prob,SRIW1())\nplot(sol)(Image: jump_diffusion)"
},

{
    "location": "tutorials/jump_diffusion.html#Coupling-Jump-Problems-1",
    "page": "Jump Diffusion Equations",
    "title": "Coupling Jump Problems",
    "category": "section",
    "text": "In many applications one is interested in coupling two stochastic processes. This has applications in Monte Carlo simulations and sensitivity analysis, for example. Currently, the coupling that is implemented for jump processes is known as the split coupling. The split coupling couples two jump processes by coupling the underlying Poisson processes driving the jump components. Suppose prob and prob_control are two problems we wish to couple. Then the coupled problem is obtained by prob_coupled =  SplitCoupledJumpProblem(jump_prob,jump_prob_control,Direct(),coupling_map)Here, coupling_map specifies which jumps to couple. If (j,i) is in coupling_map, then the ith jump in prob will be coupled to the jth jump in prob_control. Note that currently SplitCoupledJumpProblem is only implemented for constant rate jump problems.As an example, consider a doubly stochastic Poisson process, that is, a Poisson process whose rate is itself a stochastic process. In particular, we will take the rate to randomly switch between zero and 10 at unit rates:rate = (t,u) -> u[2]*10\naffect! = (integrator) -> integrator.u[1] += 1.\njump1 = ConstantRateJump(rate,affect!)\nrate = (t,u) -> u[2]\naffect! = (integrator) -> (integrator.u[2] -= 1.;integrator.u[3] += 1.)\njump2 = ConstantRateJump(rate,affect!)\n\nrate = (t,u) -> u[3]\naffect! = (integrator) -> (integrator.u[2] += 1.;integrator.u[3] -= 1.)\njump3 = ConstantRateJump(rate,affect!)\nprob = DiscreteProblem(u0,tspan)\njump_prob = JumpProblem(prob,Direct(),jump1,jump2,jump3)The doubly stochastic poisson process has two sources of randomness: one due to the Poisson process, and another due to random evolution of the rate. This is typical of many multiscale stochastic processes appearing in applications, and it is often useful to compare such a process to one obtained by removing one source of randomness. In present context, this means looking at an ODE with constant jump rates, where the deterministic evolution between jumps is given by the expected value of the Poisson process:f = function (t,u,du)\n  du[1] = u[2]*10\n  du[2] = 0.\n  du[3] = 0.\nend\nprob_control = ODEProblem(f,u0,tspan)\njump_prob_control = JumpProblem(prob_control,Direct(),jump2,jump3)Let's couple the two problems by coupling the jumps corresponding the switching of the rate:coupling_map = [(2,1),(3,2)]\nprob_coupled =  SplitCoupledJumpProblem(jump_prob,jump_prob_control,Direct(),coupling_map)Now prob_coupled will be delt with like any other JumpProblem:sol =  solve(coupled_prob,Tsit5())(Image: jump_diffusion)"
},

{
    "location": "tutorials/fempoisson_example.html#",
    "page": "Poisson Equation Finite Element Method",
    "title": "Poisson Equation Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/fempoisson_example.html#Poisson-Equation-Finite-Element-Method-1",
    "page": "Poisson Equation Finite Element Method",
    "title": "Poisson Equation Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out DiffEqTutorials.jl. This tutorial assumes you have read the Ordinary Differential Equations tutorial.In this example we will solve the Poisson Equation u=f. For our example, we will take the linear equation where f(xy) = sin(2x)cos(2y). For this equation we know that the solution is u(xyt)= sin(2x)cos(2y)(8^2) with gradient Du(xy) = cos(2x)cos(2y)(4) -sin(2x)sin(2y)(4). Thus, we define the functions for a PoissonProblem as follows:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)Or we can use the @fem_def macro to beautify our code. The first argument is the function signature, which here is (x). Second it's a list of variables to convert. This makes more sense in the Heat Equation examples, so we put in the blank expression () for now. Then we put in our expression, and lastly we define the parameter values. @fem_def will automatically replace x by x[:,1] and y by x[:,2], and will also substitute in the defined parameters. The previous definition using @fem_def is as follows:f  = @fem_def((x),TestF,begin\n  sin(α.*x).*cos(α.*y)\nend,α=>6.28)\ngD = @fem_def (x) TestgD begin\n  sin(α.*x).*cos(α.*y)/β\nend α=>6.28) β=>79.0The linebreaks are not required but I think it makes it more legible!Here we chose the Dirichlet boundary condition gD to give the theoretical solution.  Other example problems can be found in src/examples/exampleProblems.jl. To solve this problem, we first have to generate a mesh. Here we will simply generate a mesh of triangles on the square [0,1]x[0,1] with dx=2^(-5). To do so, we use the code:dx = 1//2^(5)\nmesh = notime_squaremesh([0 1 0 1],dx,:dirichlet)\nprob = PoissonProblem(f,mesh,gD=gD)Note that by specifying :dirichlet, our boundary conditions is set on all boundaries to Dirichlet. This gives an FEMmesh object which stores a finite element mesh in the same layout as iFEM. Notice this code shows that the package supports the use of rationals in meshes. Other numbers such as floating point and integers can be used as well. Finally, to solve the equation we usesol = solve(prob)solve takes in a mesh and a PoissonProblem and uses the solver to compute the solution. Here the solver was chosen to be GMRES. Other solvers can be found in the documentation. This returns a FEMSolution object which holds data about the solution, such as the solution values (u). To plot the solution, we use the commandusing Plots\nplot(sol)Here is the plot shown against the analytical solution to show the accuracy:(Image: Poisson Example Solution)"
},

{
    "location": "tutorials/femheat_example.html#",
    "page": "Heat Equation Finite Element Method",
    "title": "Heat Equation Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femheat_example.html#Heat-Equation-Finite-Element-Method-1",
    "page": "Heat Equation Finite Element Method",
    "title": "Heat Equation Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out DiffEqTutorials.jl. This tutorial assumes you have read the Ordinary Differential Equations tutorial.In this example we will solve the heat equation u_t=u+f. To do this, we define a HeatProblem which contains the function f and the boundary conditions. We specify one as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu0_func(x) = zeros(size(x,1))Here the equation we chose was nonlinear since f depends on the variable u. Thus we specify f=f(u,x,t). If f did not depend on u, then we would specify f=f(x,t). We do need to specify gD (the Dirichlet boundary condition) and gN (the Neumann boundary condition) since both are zero. u_0 specifies the initial condition. These together give a HeatProblem object which holds everything that specifies a Heat Equation Problem.We then generate a mesh. We will solve the equation on the parabolic cylinder 01^2 times 01. You can think of this as the cube, or at every time point from 0 to 1, the domain is the unit square. To generate this mesh, we use the commandtspan = (0.0,1.0)\ndx = 1//2^(3)\ndt = 1//2^(7)\nmesh = parabolic_squaremesh([0 1 0 1],dx,dt,tspan,:neumann)\nu0 = u0_func(mesh.node)\nprob = HeatProblem(u0,f,mesh)Notice that here we used the mesh to generate our u0 from a function which specifies u0. We then call the solversol = solve(prob,FEMDiffEqHeatImplicitEuler())Here we have chosen to use the ImplicitEuler algorithm to solve the equation. Other algorithms and their descriptions can be found in the solvers part of the documentation."
},

{
    "location": "tutorials/femstochastic_example.html#",
    "page": "Stochastic Finite Element Method",
    "title": "Stochastic Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femstochastic_example.html#Stochastic-Finite-Element-Method-1",
    "page": "Stochastic Finite Element Method",
    "title": "Stochastic Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SPDEs. Other introductions can be found by checking out DiffEqTutorials.jl. This tutorial assumes you have read the Ordinary Differential Equations tutorial.For most PDE problem types, we can additionally specify them as a stochastic problem by giving the appropriate optional arguments to the constructor. These arguments are a function σ which is the function multiplied to the Brownian increments dW, and stochastic, a boolean which we put as true for when the equation is stochastic. Another keyword that is optional is noisetype which specifies the type of noise (the \"color\" of the noise). By default this is Gaussian (Space-time) White Noise.The following examples show how to change the tutorial problems into stochastic problems."
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Poisson-Equation-1",
    "page": "Stochastic Finite Element Method",
    "title": "Finite Element Stochastic Poisson Equation",
    "category": "section",
    "text": "We can solve the same PDE as in the Poisson Tutorial except as the stochastic PDE,  -u=f+gdW, with additive space-time white noise by specifying the problem as:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\nσ(x) = .01 #Additive noise\ndx = 1//2^(5)\nmesh = notime_squaremesh([0 1 0 1],dx,:dirichlet)\nprob = PoissonProblem(f,mesh,σ=σ)\nsol = solve(prob)This gives the following plot (with adding the deterministic solution from the previous example):(Image: Stochastic Poisson Example Solution)"
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Heat-Equation-1",
    "page": "Stochastic Finite Element Method",
    "title": "Finite Element Stochastic Heat Equation",
    "category": "section",
    "text": "This will solve a nonlinear stochastic heat equation u_t=u+f+gdW with forcing function f(u)=.5-u, noise function g(u)=100u^2 and initial condition u0=0. We would expect this system to rise towards the deterministic steady state u=2 (but stay in mean a bit below it due to 1st order \"Milstein\" effects), gaining more noise as it increases. This is specified as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu0_func(x) = zeros(size(x,1))\nσ(t,x,u) = 1u.^2\ntspan = (0.0,5.0)\ndx = 1//2^(3)\ndt = 1//2^(11)\nmesh = parabolic_squaremesh([0 1 0 1],dx,dt,tspan,:neumann)\nu0 = u0_func(mesh.node)\nprob = HeatProblem(u0,f,mesh,σ=σ)We use the following code to create an animation of the solution:sol = solve(prob,FEMDiffEqHeatEuler(),save_everystep=true,solver=:LU)\nusing Plots\nanimate(sol;zlim=(0,3),cbar=false)(Image: Stochastic Heat Solution)"
},

{
    "location": "basics/overview.html#",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Overview of DifferentialEquations.jl",
    "category": "page",
    "text": ""
},

{
    "location": "basics/overview.html#Overview-of-DifferentialEquations.jl-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Overview of DifferentialEquations.jl",
    "category": "section",
    "text": "The general workflow for using the package is as follows:Define a problem\nSolve the problem\nAnalyze the output"
},

{
    "location": "basics/overview.html#Defining-Problems-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Defining Problems",
    "category": "section",
    "text": "Problems are specified via a type interface. The problem types are designed to contain the necessary information to fully define their associated differential equation. Each problem type has a page explaining their problem type and the special features associated with them. For example, an ordinary differential equation is defined byfracdudt = f(tu)over some time interval tspan with some initial condition u0, and therefore the ODEProblem is defined by those components:prob = ODEProblem(f,u0,tspan)Note that the number types in the solution will match the types you designate in the problem. For example, if one uses Rational{BigInt} for specifying the timespan and BigFloat for specifying the initial condition, then the solution will solve using Rational{BigInt} for the timesteps and BigFloat for the independent variables. A wide variety of number types are compatible with the solvers such as complex numbers, unitful numbers (via Unitful.jl), decimals (via DecFP), dual numbers, and many more which may not have been tested yet (thanks to the power of multiple dispatch!). For information on type-compatibilty, please see the solver pages for the specific problems."
},

{
    "location": "basics/overview.html#Solving-the-Problems-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Solving the Problems",
    "category": "section",
    "text": "Each type of differential equation has its own problem type which allow the solvers to dispatch to the right methods. The common interface for calling the solvers is:sol = solve(prob,alg;kwargs)Into the command, one passes the differential equation problem that they defined prob, optionally choose an algorithm alg (a default is given if not chosen), and change the properties of the solver using keyword arguments. The common arguments which are accepted by most methods is defined in the common solver options manual page. The solver returns a solution object sol which hold all of the details for the solution."
},

{
    "location": "basics/overview.html#Analyzing-the-Solution-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Analyzing the Solution",
    "category": "section",
    "text": "With the solution object, you do the analysis as you please! The solution type has a common interface which makes handling the solution similar between the different types of differential equations. Tools such as interpolations are seamlessly built into the solution interface to make analysis easy. This interface is described in the solution handling manual page.Plotting functionality is provided by a recipe to Plots.jl. To use plot solutions, simply call the plot(sol) and the plotter will generate appropriate plots. If save_everystep was used, the plotters can generate animations of the solutions to evolution equations using the animate(sol) command. Plots can be customized using all of the keyword arguments provided by Plots.jl. Please see Plots.jl's documentation for more information."
},

{
    "location": "basics/overview.html#Add-on-Tools-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Add-on Tools",
    "category": "section",
    "text": "One of the most compelling features of DifferentialEquations.jl is that the common solver interface allows one to build tools which are \"algorithm and problem agnostic\". For example, one of the provided tools allows for performing parameter estimation on ODEProblems. Since the solve interface is the same for the different algorithms, one can use any of the associated solving algorithms. This modular structure allows one to mix and match overarching analysis tools with specialized algorithms to one's problem, leading to high performance with a large feature base. Isn't that the promise of Julia just being fulfilled?"
},

{
    "location": "basics/overview.html#Development-and-Testing-Tools-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Development and Testing Tools",
    "category": "section",
    "text": "Lastly, one unique feature of DifferentialEquations.jl is the existence of algorithm development and testing functionality. This suite was designed by researchers in the field of numerical differential equations to both try out new ideas and distribute finalized results to large audiences. The tools for algorithm development allow for easy convergence testing, benchmarking, and higher order analysis (stability plotting, etc.). This is one of the reasons why DifferentialEquations.jl contains many algorithms which are unique and the results of recent publications! Please check out the developer documentation for more information on using the development tools.Note that DifferentialEquations.jl allows for distributed development, meaning that algorithms which \"plug-into ecosystem\" don't have to be a part of the major packages. If you are interested in adding your work to the ecosystem, checkout the developer documentation for more information."
},

{
    "location": "basics/common_solver_opts.html#",
    "page": "Common Solver Options",
    "title": "Common Solver Options",
    "category": "page",
    "text": ""
},

{
    "location": "basics/common_solver_opts.html#Common-Solver-Options-1",
    "page": "Common Solver Options",
    "title": "Common Solver Options",
    "category": "section",
    "text": "The DifferentialEquations.jl universe has a large set of common arguments available for the solve function. These arguments apply to solve on any problem type and are only limited by limitations of the specific implementations.Many of the defaults depend on the algorithm or the package the algorithm derives from. Not all of the interface is provided by every algorithm. For more detailed information on the defaults and the available options for specific algorithms / packages, see the manual pages for the solvers of specific problems. To see whether a specific package is compaible with the use of a given option, see the compatibility chart"
},

{
    "location": "basics/common_solver_opts.html#Default-Algorithm-Hinting-1",
    "page": "Common Solver Options",
    "title": "Default Algorithm Hinting",
    "category": "section",
    "text": "To help choose the default algorithm, the keyword argument alg_hints is provided to solve. alg_hints is a Vector{Symbol} which describe the problem at a high level to the solver. The options are::nonstiff - Denotes the equation as nonstiff.\n:stiff - Denotes the equation as stiff.Currently unused options include::interpolant - Denotes that a high-precision interpolation is important.\n:memorybound - Denotes that the solver will be memory bound.This functionality is derived via the benchmarks in DiffEqBenchmarks.jl and is under active development."
},

{
    "location": "basics/common_solver_opts.html#Output-Control-1",
    "page": "Common Solver Options",
    "title": "Output Control",
    "category": "section",
    "text": "These arguments control the output behavior of the solvers. It defaults to maximum output to give the best interactive user experience, but can be reduced all the way to only saving the solution at the final timepoint. All of these options can be mixed and matched. For example, the combination:sol = solve(prob; saveat=[0.2, 0.5], dense = true)will only save the solution (sol.u) at the timepoints tspan[1], 0.2, 0.5, tspan[end].  It will also enable dense output to the sol object, enabling you to do something like sol(0.345) which interpolates the solution to the time equal to 0.345. The following options are all related to output control. See the \"Examples\" section at the end of this page for some example usage.dense: Denotes whether to save the extra pieces required for dense (continuous) output. Default is true for algorithms which have the ability to produce dense output.\nsaveat: Denotes specific times to save the solution at, during the solving phase. The solver will save at each of the timepoints in this array in the most efficient manner (always including the points of tspan).  Note that this can be used even if dense=false. In fact, if only saveat is given, then the  arguments save_everystep and dense are becoming false by default and must be explicitly given as true if desired. If saveat is given a number, then it will automatically expand to tspan[1]:saveat:tspan[2].  For methods where interpolation is not possible, saveat may be equivalent to tstops. Default is []. \nsave_idxs: Denotes the indices for the components of the equation to save. Defaults to saving all indices. For example, if you are solving a 3-dimensional ODE,  and given save_idxs = [1, 3], only the first and third components of the solution will be outputted.  Notice that of course in this case the outputed solution will be two-dimensional.\ntstops: Denotes extra times that the timestepping algorithm must step to. This should be used to help the solver deal with discontinuities and singularities, since stepping exactly at the time of the discontinuity will improve accuracy. If a method cannot change timesteps (fixed timestep multistep methods), then tstops will use an interpolation, matching the behavior of saveat. If a method cannot change timesteps and also cannot interpolate, then tstops must be a multiple of dt or else an error will be thrown. Default is [].\nd_discontinuities: Denotes locations of discontinuities in low order derivatives. This will force FSAL algorithms which assume derivative continuity to re-evaluate the derivatives at the point of discontinuity. The default is [].\nsave_everystep: Saves the result at every timeseries_steps iteration.     Default is true if isempty(saveat).\ntimeseries_steps: Denotes how many steps between saving a value for the timeseries. These \"steps\" are the steps that the solver stops internally (the ones you get by save_everystep = true), not the ones that are  instructed by the user (all solvers work in a step-like manner). Defaults to 1.\nsave_start: Denotes whether the initial condition should be included in the solution type as the first timepoint. Defaults to true."
},

{
    "location": "basics/common_solver_opts.html#Stepsize-Control-1",
    "page": "Common Solver Options",
    "title": "Stepsize Control",
    "category": "section",
    "text": "These arguments control the timestepping routines.adaptive: Turns on adaptive timestepping for appropriate methods. Default is true.\nabstol: Absolute tolerance in adaptive timestepping. Defaults to 1e-6.\nreltol: Relative tolerance in adaptive timestepping. Defaults to 1e-3.\ndt: Sets the initial stepsize. This is also the stepsize for fixed timestep methods. Defaults to an automatic choice.\ninternalnorm: The norm function internalnorm(u) which error estimates are calculated. Defaults are package-dependent.\ngamma: The risk-factor γ in the q equation for adaptive timestepping. Default is algorithm dependent.\ndtmax: Maximum dt for adaptive timestepping. Defaults are package-dependent.\ndtmin: Minimum dt for adaptive timestepping. Defaults are package-dependent.\nbeta1: The Lund stabilization α parameter. Defaults are algorithm-dependent.\nbeta2: The Lund stabilization β parameter. Defaults are algorithm-dependent.\nqmax: Defines the maximum value possible for the adaptive q. Defaults are algorithm-dependent.\nqmin: Defines the maximum value possible for the adaptive q. Defaults are algorithm-dependent.\nqoldinit: The initial qold in stabilization stepping. Defaults are algorithm-dependent."
},

{
    "location": "basics/common_solver_opts.html#Fixed-Stepsize-Usage-1",
    "page": "Common Solver Options",
    "title": "Fixed Stepsize Usage",
    "category": "section",
    "text": "Note that if a method does not have adaptivity, the following rules apply:If dt is set, then the algorithm will step with size dt each iteration.\nIf tstops and dt are both set, then the algorithm will step with either a size dt, or use a smaller step to hit the tstops point.\nIf tstops is set without dt, then the algorithm will step directly to each value in tstops\nIf neither dt nor tstops are set, the solver will throw an error."
},

{
    "location": "basics/common_solver_opts.html#Miscellaneous-1",
    "page": "Common Solver Options",
    "title": "Miscellaneous",
    "category": "section",
    "text": "maxiters: Maximum number of iterations before stopping. Defaults to 1e5.\ncallback: Specifies a callback. Defaults to a callback function which performs the saving routine. For more information, see the Event Handling and Callback Functions manual page.\nisoutofdomain: Specifies a function isoutofdomain(t,u) where, when it returns false, it will reject the timestep. Defaults to always false.\nunstable_check: Specifies a function unstable_check(dt,t,u) where, when it returns true, it will cause the solver to exit and throw a warning. Defaults to any(isnan,u), i.e. checking if any value is a NaN.\nverbose: Toggles whether warnings are thrown when the solver exits early. Defualts to true.\ncalck: Turns on and off the internal ability for intermediate     interpolations (also known as intermediate density). Not the same as dense, which is post-solution interpolation. This defaults to dense || !isempty(saveat) ||  \"no custom callback is given\".  This can be used to turn off interpolations (to save memory) if one isn't using interpolations when a custom callback is used. Another case where this may be used is to turn on interpolations for usage in the integrator interface even when interpolations are used nowhere else.  Note that this is only required if the algorithm doesn't have a free or lazy interpolation (DP8()). If calck = false, saveat cannot be used. The rare keyword calck can be useful in event handling."
},

{
    "location": "basics/common_solver_opts.html#Progress-Monitoring-1",
    "page": "Common Solver Options",
    "title": "Progress Monitoring",
    "category": "section",
    "text": "These arguments control the usage of the progressbar in the Juno IDE.progress: Turns on/off the Juno progressbar. Default is false.\nprogress_steps: Numbers of steps between updates of the progress bar. Default is 1000.\nprogress_name: Controls the name of the progressbar. Default is the name of the problem type.\nprogress_message: Controls the message with the progressbar. Defaults to showing dt, t, the maximum of u."
},

{
    "location": "basics/common_solver_opts.html#User-Data-1",
    "page": "Common Solver Options",
    "title": "User Data",
    "category": "section",
    "text": "userdata: This is a user-chosen type which will show up in the integrator type, allowing the user to have a cache for callbacks, event handling, and other various activities."
},

{
    "location": "basics/common_solver_opts.html#Error-Calculations-1",
    "page": "Common Solver Options",
    "title": "Error Calculations",
    "category": "section",
    "text": "If you are using the test problems (ex: ODETestProblem), then the following options control the errors which are calculated:timeseries_errors: Turns on and off the calculation of errors at the steps which were taken, such as the l2 error. Default is true.\ndense_errors: Turns on and off the calculation of errors at the steps which require dense output and calculate the error at 100 evenly-spaced points throughout tspan. An example is the L2 error. Default is false."
},

{
    "location": "basics/common_solver_opts.html#Examples-1",
    "page": "Common Solver Options",
    "title": "Examples",
    "category": "section",
    "text": "The following lines are examples of how one could use the configuration of solve(). For these examples a 3-dimensional ODE problem is assumed, however the extention to other types is straightforward. solve(prob, AlgorithmName()) : The \"default\" setting, with a user-specified algorithm (given by AlgorithmName()). All parameters get their default values.    This means that the solution is saved at the steps the Algorithm stops internally and dense output is enabled if the    chosen algorithm allows for it.    All other integration parameters (e.g. stepsize) are chosen automatically.solve(prob, saveat = 0.01, abstol = 1e-9, reltol = 1e-9) : Standard setting for accurate output at specified (and equidistant) time intervals, used for e.g. Fourier Transform. The solution is given every 0.01 time units,    starting from tspan[1]. The solver used is Tsit5() since no keyword alg_hits is given.solve(prob, maxiters = 1e7, progress = true, save_idxs = [1]) : Using longer maximum number of solver iterations can be useful when a given tspan is very long. This example only saves the first of the variables of the system,    either to save size or because the user does not care about the others. Finally, with progress = true you are enabling   the progress bar, provided you are using the Atom+Juno IDE set-up for your Julia."
},

{
    "location": "basics/solution.html#",
    "page": "Solution Handling",
    "title": "Solution Handling",
    "category": "page",
    "text": ""
},

{
    "location": "basics/solution.html#Solution-Handling-1",
    "page": "Solution Handling",
    "title": "Solution Handling",
    "category": "section",
    "text": ""
},

{
    "location": "basics/solution.html#Accessing-the-Values-1",
    "page": "Solution Handling",
    "title": "Accessing the Values",
    "category": "section",
    "text": "The solution type has a lot of built in functionality to help analysis. For example, it has an array interface for accessing the values. Internally, the solution type has two important fields:u which holds the Vector of values at each timestep\nt which holds the times of each timestep.Different solution types may add extra information as necessary, such as the derivative at each timestep du or the spatial discretization x, y, etc."
},

{
    "location": "basics/solution.html#Array-Interface-1",
    "page": "Solution Handling",
    "title": "Array Interface",
    "category": "section",
    "text": "Instead of working on the Vector{uType} directly, we can use the provided array interface.sol[i]to access the value at timestep i (if the timeseries was saved), andsol.t[i]to access the value of t at timestep i. For multi-dimensional systems, this will address first by component and lastly by time, and thussol[i,j]will be the ith component at timestep j. If the independent variables had shape (for example, was a matrix), then i is the linear index. We can also access solutions with shape:sol[i,j,k]gives the [i,j] component of the system at timestep k. The colon operator is supported, meaning thatsol[j,:]gives the timeseries for the jth component."
},

{
    "location": "basics/solution.html#Interpolations-1",
    "page": "Solution Handling",
    "title": "Interpolations",
    "category": "section",
    "text": "If the solver allows for dense output and dense=true was set for the solving (which is the default), then we can access the approximate value at a time t using the commandsol(t)Note that the interpolating function allows for t to be a vector and uses this to speed up the interpolation calculations. The full API for the interpolations issol(t,deriv=Val{0};idxs=nothing)The optional argument deriv lets you choose the number n derivative to solve the interpolation for, defaulting with n=0. Note that most of the derivatives have not yet been implemented (though it's not hard, it just has to be done by hand for each algorithm. Open an issue if there's a specific one you need). idxs allows you to choose the indices the interpolation should solve for. For example,sol(t,idxs=1:2:5)will return a Vector of length 3 which is the interpolated values at t for components 1, 3, and 5. idxs=nothing, the default, means it will return every component. In addition, we can dosol(t,idxs=1)and it will return a Number for the interpolation of the single value. Note that this interpolation only computes the values which are requested, and thus it's much faster on large systems to use this rather than computing the full interpolation and using only a few values.In addition, there is an inplace form:sol(out,t,deriv=Val{0};idxs=nothing)which will write the output to out. This allows one to use pre-allocated vectors for the output to improve the speed even more."
},

{
    "location": "basics/solution.html#Comprehensions-1",
    "page": "Solution Handling",
    "title": "Comprehensions",
    "category": "section",
    "text": "The solver interface also gives tools for using comprehensions over the solution. Using the tuples(sol) function, we can get a tuple for the output at each timestep. This allows one to do the following:[t+2u for (t,u) in tuples(sol)]One can use the extra components of the solution object as well as using zip. For example, say the solution type holds du, the derivative at each timestep. One can comprehend over the values using:[t+3u-du for (t,u,du) in zip(sol.t,sol.u,sol.du)]Note that the solution object acts as a vector in time, and so its length is the number of saved timepoints."
},

{
    "location": "basics/solution.html#Special-Fields-1",
    "page": "Solution Handling",
    "title": "Special Fields",
    "category": "section",
    "text": "The solution interface also includes some special fields. The problem object prob and the algorithm used to solve the problem alg are included in the solution. Additionally, the field dense is a boolean which states whether the interpolation functionality is available. Lastly, there is a mutable state tslocation which controls the plot recipe behavior. By default, tslocation=0. Its values have different meanings between partial and ordinary differential equations:tslocation=0  for non-spatial problems (ODEs) means that the plot recipe will plot the full solution. tslocation=i means that it will only plot the timepoint i.\ntslocation=0 for spatial problems (PDEs) means the plot recipe will plot the final timepoint. tslocation=i means that the plot recipe will plot the ith timepoint.What this means is that for ODEs, the plots will default to the full plot and PDEs will default to plotting the surface at the final timepoint. The iterator interface simply iterates the value of tslocation, and the animate function iterates the solution calling solve at each step."
},

{
    "location": "basics/solution.html#Return-Codes-(RetCodes)-1",
    "page": "Solution Handling",
    "title": "Return Codes (RetCodes)",
    "category": "section",
    "text": "The solution types have a retcode field which returns a symbol signifying the error state of the solution. The retcodes are as follows::Default: The solver did not set retcodes.\n:Success: The integration completed without erroring.\n:MaxIters: The integration exited early because it reached its maximum number of iterations.\n:DtLessThanMin: The timestep method chose a stepsize which is smaller than the allowed minimum timestep, and exited early.\n:Unstable: The solver detected that the solution was unstable and exited early."
},

{
    "location": "basics/solution.html#Problem-Specific-Features-1",
    "page": "Solution Handling",
    "title": "Problem-Specific Features",
    "category": "section",
    "text": "Extra fields for solutions of specific problems are specified in the appropriate problem definition page.  "
},

{
    "location": "basics/plot.html#",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "page",
    "text": ""
},

{
    "location": "basics/plot.html#Plot-Functions-1",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "section",
    "text": ""
},

{
    "location": "basics/plot.html#Standard-Plots-1",
    "page": "Plot Functions",
    "title": "Standard Plots",
    "category": "section",
    "text": "Plotting functionality is provided by recipes to Plots.jl. To use plot solutions, simply call the plot(type) after importing Plots.jl and the plotter will generate appropriate plots.#Pkg.add(\"Plots\") # You need to install Plots.jl before your first time using it!\nusing Plots\nplot(sol) # Plots the solutionMany of the types defined in the DiffEq universe, such as ODESolution, ConvergenceSimulation WorkPrecision, etc. have plot recipes to handle the default plotting behavior. Plots can be customized using all of the keyword arguments provided by Plots.jl. For example, we can change the plotting backend to the GR package and put a title on the plot by doing:gr()\nplot(sol,title=\"I Love DiffEqs!\")"
},

{
    "location": "basics/plot.html#Density-1",
    "page": "Plot Functions",
    "title": "Density",
    "category": "section",
    "text": "If the problem was solved with dense=true, then denseplot controls whether to use the dense function for generating the plot, and plotdensity is the number of evenly-spaced points (in time) to plot. For example:plot(sol,denseplot=false)means \"only plot the points which the solver stepped to\", while:plot(sol,plotdensity=1000)means to plot 1000 points using the dense function (since denseplot=true by default)."
},

{
    "location": "basics/plot.html#Choosing-Variables-1",
    "page": "Plot Functions",
    "title": "Choosing Variables",
    "category": "section",
    "text": "In the plot command, one can choose the variables to be plotted in each plot. The master form is:vars = [(f1,0,1), (f2,1,3), (f3,4,5)]where this would mean plot f1(variable 1, variable 2), f2(variable 1, variable 3), f3(variable 4, variable 5) all on the same graph. (0 is considered to be time, or the independent variable). The function f1 should take in scalars and return a tuple. If no function is given, for example,vars = [(0,1), (1,3), (4,5)]where this would mean plot variable 0 vs 1, 1 vs 3, and 4 vs 5 all on the same graph. While this can be used for everything, the following conveniences are provided:Everywhere in a tuple position where we only find an integer, this variable is plotted as a function of time.  For example, the list above is equivalent to:vars = [1, (1,3), (4,5)]andvars = [1, 3, 4]is the most concise way to plot the variables 1, 3, and 4 as a function of time.It is possible to omit the list if only one plot is wanted: (2,3) and 4 are respectively equivalent to [(2,3)] and [(0,4)].\nA tuple containing one or several lists will be expanded by associating corresponding elements of the lists with each other:vars = ([1,2,3], [4,5,6])is equivalent tovars = [(1,4), (2,5), (3,6)]andvars = (1, [2,3,4])is equivalent tovars = [(1,2), (1,3), (1,4)]Instead of using integers, one can use the symbols from a ParameterizedFunction. For example, vars=(:x,:y) will replace the symbols with the integer values for components :x and :y.\nn-dimensional groupings are allowed. For example, (1,2,3,4,5) would be a 5-dimensional plot between the associated variables."
},

{
    "location": "basics/plot.html#Complex-Numbers-and-High-Dimensional-Plots-1",
    "page": "Plot Functions",
    "title": "Complex Numbers and High Dimensional Plots",
    "category": "section",
    "text": "The recipe library DimensionalPlotRecipes.jl is provided for extra functionality on high dimensional numbers (complex numbers) and other high dimensional plots. See the README for more details on the extra controls that exist."
},

{
    "location": "basics/plot.html#Example-1",
    "page": "Plot Functions",
    "title": "Example",
    "category": "section",
    "text": "using DifferentialEquations, Plots\nlorenz = @ode_def Lorenz begin\n  dx = σ*(y-x)\n  dy = ρ*x-y-x*z\n  dz = x*y-β*z\nend σ = 10. β = 8./3. ρ => 28.\n\nu0 = [1., 5., 10.]\ntspan = (0., 100.)\nprob = ODEProblem(lorenz, u0, tspan)\nsol = solve(prob)\n\nxyzt = plot(sol, plotdensity=10000,lw=1.5)\nxy = plot(sol, plotdensity=10000, vars=(:x,:y))\nxz = plot(sol, plotdensity=10000, vars=(:x,:z))\nyz = plot(sol, plotdensity=10000, vars=(:y,:z))\nxyz = plot(sol, plotdensity=10000, vars=(:x,:y,:z))\nplot(plot(xyzt,xyz),plot(xy, xz, yz, layout=(1,3),w=1), layout=(2,1))(Image: lorenz_plot)An example using the functions:f(x,y,z) = (sqrt(x^2+y^2+z^2),x)\nplot(sol,vars=(f,:x,:y,:z))(Image: norm_plot)"
},

{
    "location": "basics/plot.html#Animations-1",
    "page": "Plot Functions",
    "title": "Animations",
    "category": "section",
    "text": "Using the iterator interface over the solutions, animations can also be generated via the animate(sol) command. One can choose the filename to save to via animate(sol,filename), while the frames per second fps and the density of steps to show every can be specified via keyword arguments. The rest of the arguments will be directly passed to the plot recipe to be handled as normal. For example, we can animate our solution with a larger line-width which saves every 4th frame via:#Pkg.add(\"ImageMagick\") # You may need to install ImageMagick.jl before your first time using it!\n#using ImageMagick # Some installations require using ImageMagick for good animations\nanimate(sol,lw=3,every=4)Please see Plots.jl's documentation for more information on the available attributes."
},

{
    "location": "basics/integrator.html#",
    "page": "Integrator Interface",
    "title": "Integrator Interface",
    "category": "page",
    "text": ""
},

{
    "location": "basics/integrator.html#Integrator-Interface-1",
    "page": "Integrator Interface",
    "title": "Integrator Interface",
    "category": "section",
    "text": "The integrator interface gives one the ability to interactively step through the numerical solving of a differential equation. Through this interface, one can easily monitor results, modify the problem during a run, and dynamically continue solving as one sees fit.Note: this is currently only offered by OrdinaryDiffEq.jl, DelayDiffEq.jl, and StochasticDiffEq.jl. Solvers from other packages will support this in the near future."
},

{
    "location": "basics/integrator.html#Initialization-and-Stepping-1",
    "page": "Integrator Interface",
    "title": "Initialization and Stepping",
    "category": "section",
    "text": "To initialize an integrator, use the syntax:integrator = init(prob,alg;kwargs...)The keyword args which are accepted are the same Common Solver Options used by solve. The type which is returned is the integrator. One can manually choose to step via the step! command:step!(integrator)which will take one successful step. This type also implements an integrator interface, so one can step n times (or to the last tstop) using the take iterator:for i in take(integrator,n) endOne can loop to the end by using solve!(integrator) or using the integrator interface:for i in integrator endIn addition, some helper iterators are provided to help monitor the solution. For example, the tuples iterator lets you view the values:for (t,u) in tuples(integrator)\n  @show t,u\nendand the intervals iterator lets you view the full interval:for (tprev,uprev,t,u) in intervals(integrator)\n  @show tprev,t\nendLastly, one can dynamically control the \"endpoint\". The initialization simply makes prob.tspan[2] the last value of tstop, and many of the iterators are made to stop at the final tstop value. However, step! will always take a step, and one can dynamically add new values of tstops by modifiying the variable in the options field: push!(integrator.opts.tstops,new_t)."
},

{
    "location": "basics/integrator.html#Handing-Integrators-1",
    "page": "Integrator Interface",
    "title": "Handing Integrators",
    "category": "section",
    "text": "The integrator type holds all of the information for the intermediate solution of the differential equation. Useful fields are:t - time of the proposed step\nu - value at the proposed step\nuserdata - user-provided data type\nopts - common solver options\nalg - the algorithm associated with the solution\nf - the function being solved\nsol - the current state of the solution\ntprev - the last timepoint\nuprev - the value at the last timepointThe userdata is the type which is provided by the user as a keyword arg in init. opts holds all of the common solver options, and can be mutated to change the solver characteristics. For example, to modify the absolute tolerance for the future timesteps, one can do:integrator.opts.abstol = 1e-9The sol field holds the current solution. This current solution includes the interpolation function if available, and thus integrator.sol(t) lets one interpolate efficiently over the whole current solution. Additionally, a a \"current interval interpolation function\" is provided on the integrator type via integrator(t). This uses only the solver information from the interval [tprev,t] to compute the interpolation, and is allowed to extrapolate beyond that interval."
},

{
    "location": "basics/integrator.html#Note-about-mutating-1",
    "page": "Integrator Interface",
    "title": "Note about mutating",
    "category": "section",
    "text": "Be cautious: one should not directly mutate the t and u fields of the integrator. Doing so will destroy the accuracy of the interpolator and can harm certain algorithms. Instead if one wants to introduce discontinuous changes, one should use the Event Handling and Callback Functions. Modifications within a callback affect! surrounded by saves provides an error-free handling of the discontinuity."
},

{
    "location": "basics/integrator.html#Integrator-vs-Solution-1",
    "page": "Integrator Interface",
    "title": "Integrator vs Solution",
    "category": "section",
    "text": "The integrator and the solution have very different actions because they have very different meanings. The Solution type is a type with history: it stores all of the (requested) timepoints and interpolates/acts using the values closest in time. On the other hand, the Integrator type is a local object. It only knows the times of the interval it currently spans, the current caches and values, and the current state of the solver (the current options, tolerances, etc.). These serve very different purposes:The integrator's interpolation can extrapolate, both forward and backward in in time. This is used to estimate events and is internally used for predictions.\nThe integrator is fully mutable upon iteration. This means that every time an iterator affect is used, it will take timesteps from the current time. This means that first(integrator)!=first(integrator) since the integrator will step once to evaluate the left and then step once more (not backtracking). This allows the iterator to keep dynamically stepping, though one should note that it may violate some immutablity assumptions commonly made about iterators.If one wants the solution object, then one can find it in integrator.sol."
},

{
    "location": "basics/integrator.html#Function-Interface-1",
    "page": "Integrator Interface",
    "title": "Function Interface",
    "category": "section",
    "text": "In addition to the type interface, a function interface is provided which allows for safe modifications of the integrator type, and allows for uniform usage throughout the ecosystem (for packages/algorithms which implement the functions). The following functions make up the interface:"
},

{
    "location": "basics/integrator.html#Saving-Controls-1",
    "page": "Integrator Interface",
    "title": "Saving Controls",
    "category": "section",
    "text": "savevalues!(integrator): Adds the current state to the sol."
},

{
    "location": "basics/integrator.html#Cache-Iterators-1",
    "page": "Integrator Interface",
    "title": "Cache Iterators",
    "category": "section",
    "text": "user_cache(integrator): Returns an iterator over the user-facing cache arrays.\nu_cache(integrator):  Returns an iterator over the cache arrays for u in the method. This can be used to change internal values as needed.\ndu_cache(integrator):  Returns an iterator over the cache arrays for rate quantities the method. This can be used to change internal values as needed.\nfull_cache(integrator):  Returns an iterator over the cache arrays of the method. This can be used to change internal values as needed."
},

{
    "location": "basics/integrator.html#Stepping-Controls-1",
    "page": "Integrator Interface",
    "title": "Stepping Controls",
    "category": "section",
    "text": "u_modified!(integrator,bool): Bool which states whether a change to u occurred, allowing the solver to handle the discontinuity. By default, this is assumed to be true if a callback is used. This will result in the re-calculation of the derivative at t+dt, which is not necessary if the algorithm is FSAL and u does not experience a discontinuous change at the end of the interval. Thus if u is unmodified in a callback, a single call to the derivative calculation  can be eliminated by u_modified!(integrator,false).\nget_proposed_dt(integrator,factor):  Gets the proposed dt for the next timestep.\nset_proposed_dt!(integrator,factor):  Sets the proposed dt for the next timestep.\nproposed_dt(integrator): Returns the dt of the proposed step.\nterminate!(integrator): Terminates the integrator by emptying tstops. This can be used in events and callbacks to immediately end the solution process.\nchange_t_via_interpolation(integrator,t,modify_save_endpoint=Val{false}): This option lets one modify the current t and changes all of the corresponding values using the local interpolation. If the current solution has already been saved, one can provide the optional value modify_save_endpoint to also modify the endpoint of sol in the same manner."
},

{
    "location": "basics/integrator.html#Resizing-1",
    "page": "Integrator Interface",
    "title": "Resizing",
    "category": "section",
    "text": "resize!(integrator,k): Resizes the DE to a size k. This chops off the end of the array, or adds blank values at the end, depending on whether k>length(integrator.u).\nresize_non_user_cache!(integrator,k): Resizes the non-user facing caches to be compatible with a DE of size k. This includes resizing Jacobian caches. Note that in many cases, resize! simple resizes user_cache variables and then calls this function. This finer control is required for some AbstractArray operations.\ndeleteat_non_user_cache!(integrator,idxs): deleteat!s the non-user facing caches at indices idxs. This includes resizing Jacobian caches. Note that in many cases, deleteat! simple deleteat!s user_cache variables and then calls this function. This finer control is required for some AbstractArray operations.\naddat_non_user_cache!(integrator,idxs): addat!s the non-user facing caches at indices idxs. This includes resizing Jacobian caches. Note that in many cases, addat! simple addat!s user_cache variables and then calls this function. This finer control is required for some AbstractArray operations.\ndeleteat!(integrator,idxs): Shrinks the ODE by deleting the idxs components.\naddat!(integrator,idxs): Grows the ODE by adding the idxs components. Must be contiguous indices."
},

{
    "location": "basics/integrator.html#Misc-1",
    "page": "Integrator Interface",
    "title": "Misc",
    "category": "section",
    "text": "get_du(integrator): Returns the derivative at t."
},

{
    "location": "basics/integrator.html#Note-1",
    "page": "Integrator Interface",
    "title": "Note",
    "category": "section",
    "text": "Note that not all of these functions will be implemented for every algorithm. Some have hard limitations. For example, Sundials.jl cannot resize problems. When a function is not limited, an error will be thrown."
},

{
    "location": "basics/integrator.html#Additional-Options-1",
    "page": "Integrator Interface",
    "title": "Additional Options",
    "category": "section",
    "text": "The following options can additionally be specified in init (or be mutated in the opts) for further control of the integrator:advance_to_tstop: This makes step! continue to the next value in tstop.\nstop_at_next_tstop: This forces the iterators to stop at the next value of tstop.For example, if one wants to iterate but only stop at specific values, one can choose:integrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5],advance_to_tstop=true)\nfor (t,u) in tuples(integrator)\n  @test t ∈ [0.5,1.0]\nendwhich will only enter the loop body at the values in tstops (here, prob.tspan[2]==1.0 and thus there are two values of tstops which are hit). Addtionally, one can solve! only to 0.5 via:integrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5])\nintegrator.opts.stop_at_next_tstop = true\nsolve!(integrator)"
},

{
    "location": "basics/integrator.html#Plot-Recipe-1",
    "page": "Integrator Interface",
    "title": "Plot Recipe",
    "category": "section",
    "text": "Like the Solution type, a plot recipe is provided for the Integrator type. Since the Integrator type is a local state type on the current interval, plot(integrator) returns the solution on the current interval. The same options for the plot recipe are provided as for sol, meaning one can choose variables via the vars keyword argument, or change the plotdensity / turn on/off denseplot.Additionally, since the integrator is an integrator, this can be used in the Plots.jl animate command to iteratively build an animation of the solution while solving the differential equation.For an example of manually chaining together the iterator interface and plotting, one should try the following:using DifferentialEquations, DiffEqProblemLibrary, Plots\nprob = prob_ode_linear\n\nusing Plots\nintegrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5])\npyplot(show=true)\nplot(integrator)\nfor i in integrator\n  display(plot!(integrator,vars=(0,1),legend=false))\nend\nstep!(integrator); plot!(integrator,vars=(0,1),legend=false)\nsavefig(\"iteratorplot.png\")(Image: Iterator Plot)"
},

{
    "location": "basics/compatibility_chart.html#",
    "page": "Solver Compatibility Chart",
    "title": "Solver Compatibility Chart",
    "category": "page",
    "text": ""
},

{
    "location": "basics/compatibility_chart.html#Solver-Compatibility-Chart-1",
    "page": "Solver Compatibility Chart",
    "title": "Solver Compatibility Chart",
    "category": "section",
    "text": "This chart is for documenting the compatibility of the component solver packages to the common interface. An x means that the option is implemented or the add-on functionality will work with the given solver. A blank means that the option has not been implemented or that a given add-on has not been tested with a given package. If there are any errors in this chart, please file an issue or submit a pull-request.Option OrdinaryDiffEq.jl Sundials.jl ODE.jl ODEInterface.jl LSODA.jl StochasticDiffEq.jl DelayDiffEq.jl DASKR.jl DASSL.jl ODEIterators.jl\nDense (continuous) output x  x   x x   \nTolerance control x x x x x x x x x x\nAdvanced stepsize control x   x  x x   \ninternalnorm x  x   x x   \nInitial dt x  x x  x x   \nsave_everystep x x x  x x x x  \ntimeseries_steps x     x x   \nsaveat x x x  x x x x  \ntstops x     x x   \nd_discontinuities x     x x   \nisoutofdomain x  x   x x   \nAllows reverse time direction x x x x x x x   \nUnitful numbers x      x   \nArbitrary dimension arrays x x x x x x x x x x\nComplex numbers p     x p   \nArbitrary precision x  x   x x  x \nApproxFun types x      x   \nProgress monitoring x     x x   \nIntegrator interface x     x x   \nResizability x     x x   \nCache iterator x     x x   \nCan choose linear solvers x s    x x  x \nCan choose nonlinear solvers         x x\nCan use out of place x  x   x x  x x\nCan use inplace x x  x x x x x x x\nCompatible with DiffEqDevTools x x x x x x x x  \nCompatible with ParameterizedFunctions x x x x x x x x  \nContinuous Callbacks x     x x  x x\nDiscrete Callbacks x     x x   x\nMonte Carlo Simulations x x x x x x x x  x\nParameter Estimation x n n n n  x  x x\nParameter Sensitivity Analysis x x x x x  x   \nPlotting and solution handling x x x x x x x x  p: partial compatibility, only in nonstiff methods unless the Jacobian is provided.\nn: general compatibility, but not compatible with routines which. require being able to autodifferentiate through the entire solver.\ns: Special, Sundials has its own linear solver choices."
},

{
    "location": "basics/compatibility_chart.html#Note-on-PDEs-1",
    "page": "Solver Compatibility Chart",
    "title": "Note on PDEs",
    "category": "section",
    "text": "This chart is only for the basic (ODE/SDE/DAE/DDE) solver methods. The PDE solvers (will be) built on top of these packages and thus will have the same options available. Current, FiniteElementDiffEq.jl  is a solo implemention which is compatible with save_everystep, timeseries_steps, plotting and solution handling, arbitrary precision, and choice of dt."
},

{
    "location": "types/discrete_types.html#",
    "page": "Discrete Types",
    "title": "Discrete Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/discrete_types.html#Discrete-Types-1",
    "page": "Discrete Types",
    "title": "Discrete Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/discrete_types.html#Mathematical-Specification-of-a-Discrete-Problem-1",
    "page": "Discrete Types",
    "title": "Mathematical Specification of a Discrete Problem",
    "category": "section",
    "text": "To define an Discrete Problem, you simply need to give the function f and the initial condition u which define a function map:u_n+1 = f(tu_n)f should be specified as f(t,u) (or in-place as f(t,u,du)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well.Note that if the discrete solver is set to have scale_by_time=true, then the problem is interpreted as the map:u_n+1 = u_n + dtf(tu_n)"
},

{
    "location": "types/discrete_types.html#Problem-Type-1",
    "page": "Discrete Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/discrete_types.html#Constructors-1",
    "page": "Discrete Types",
    "title": "Constructors",
    "category": "section",
    "text": "DiscreteProblem(f,u0,tspan) : Defines the discrete problem with the specified functions."
},

{
    "location": "types/discrete_types.html#Fields-1",
    "page": "Discrete Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the map.\nu0: The initial condition.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to a black CallbackSet, which will have no effect."
},

{
    "location": "types/discrete_types.html#Note-About-Timing-1",
    "page": "Discrete Types",
    "title": "Note About Timing",
    "category": "section",
    "text": "Note that if no dt and not tstops is given, it's assumed that dt=1 and thus tspan=(0,n) will solve for n iterations. If in the solver dt is given, then the number of iterations will change. And if tstops is not empty, the solver will revert to the standard behavior of fixed timestep methods, which is \"step to each tstop\"."
},

{
    "location": "types/discrete_types.html#Special-Solver-Options-1",
    "page": "Discrete Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/discrete_types.html#Special-Solution-Fields-1",
    "page": "Discrete Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "None. The Discrete type is as basic as it gets."
},

{
    "location": "types/ode_types.html#",
    "page": "ODE Types",
    "title": "ODE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/ode_types.html#ODE-Types-1",
    "page": "ODE Types",
    "title": "ODE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Mathematical-Specification-of-an-ODE-Problem-1",
    "page": "ODE Types",
    "title": "Mathematical Specification of an ODE Problem",
    "category": "section",
    "text": "To define an ODE Problem, you simply need to give the function f and the initial condition u which define an ODE:fracdudt = f(tu)f should be specified as f(t,u) (or in-place as f(t,u,du)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/ode_types.html#Problem-Type-1",
    "page": "ODE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Constructors-1",
    "page": "ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "ODEProblem(f,u0,tspan,callback=CallbackSet(),mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/ode_types.html#Fields-1",
    "page": "ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial condition.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/ode_types.html#Special-Solver-Options-1",
    "page": "ODE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Special-Solution-Fields-1",
    "page": "ODE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "None. The ODE type is as basic as it gets."
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_linear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_linear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_bigfloatlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_bigfloatlinear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_bigfloat2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_bigfloat2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_large2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_large2Dlinear",
    "category": "Constant",
    "text": "100x100 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_2Dlinear_notinplace",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_2Dlinear_notinplace",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\non Float64. Purposefully not in-place as a test.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_threebody",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_threebody",
    "category": "Constant",
    "text": "The ThreeBody problem as written by Hairer:\n\nbeginalign\ny = y + 2y - fracy+D - fracy-D \ny = y - 2y - fracyD - fracyD \nD = ((y+)^2 + y^2)^32 \nD = ((y-)^2+y^2)^32 \n = 0012277471 \n =1-\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on t₀ = 0.0; T = parse(BigFloat,\"17.0652165601579625588917206249\") Periodic with that setup.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_pleides",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_pleides",
    "category": "Constant",
    "text": "Pleides Problem\n\nbeginalign\nx = sum_ji m(x-x)r \ny = sum_ji m(y-y)r\nendalign\n\nwhere\n\nr = ((x-x)^2 + (y-y)^2)^32\n\nand inital condtions are\n\nbeginalign\nx(0)=3  \nx(0)=3  \nx(0)=-1  \nx(0)=-3  \nx(0)=2  \nx(0)=-2  \nx(0)=2  \ny(0)=3  \ny(0)=-3  \ny(0)=2  \ny(0)=0  \ny(0)=0  \ny(0)=-4  \ny(0)=4\nendalign\n\nand with x(0)=y(0)=0 except for\n\nbeginalign\nx(0)=175 \nx(0)=-15 \ny(0)=-125 \ny(0)=1\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 3.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_vanderpol",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_vanderpol",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10 and u0=0sqrt3\n\nNon-stiff parameters.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_vanderpol_stiff",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_vanderpol_stiff",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10^6 and u0=0sqrt3\n\nStiff parameters.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_rober",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_rober",
    "category": "Constant",
    "text": "The Robertson biochemical reactions:\n\nbeginalign\nfracdydt = -ky+kyy  \nfracdydt =  ky-ky^2-kyy \nfracdydt =  ky^2\nendalign\n\nwhere k=004, k=3times10^7, k=10^4. For details, see:\n\nHairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on [0,1e11]\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_rigidbody",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_rigidbody",
    "category": "Constant",
    "text": "Rigid Body Equations\n\nbeginalign\nfracdydt  = Iyy \nfracdydt  = Iyy \nfracdydt  = Iyy\nendalign\n\nwith I=-2, I=125, and I=-12.\n\nThe initial condition is y=100009.\n\nFrom Solving Differential Equations in R by Karline Soetaert\n\nor Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 20.\n\n\n\n"
},

{
    "location": "types/ode_types.html#Example-Problems-1",
    "page": "ODE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Example problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_ode_linear, you can do something like:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_ode_linear\nsol = solve(prob)DiffEqProblemLibrary.prob_ode_linear\nDiffEqProblemLibrary.prob_ode_2Dlinear\nDiffEqProblemLibrary.prob_ode_bigfloatlinear\nDiffEqProblemLibrary.prob_ode_bigfloat2Dlinear\nDiffEqProblemLibrary.prob_ode_large2Dlinear\nDiffEqProblemLibrary.prob_ode_2Dlinear_notinplace\nDiffEqProblemLibrary.prob_ode_threebody\nDiffEqProblemLibrary.prob_ode_pleides\nDiffEqProblemLibrary.prob_ode_vanderpol\nDiffEqProblemLibrary.prob_ode_vanderpol_stiff\nDiffEqProblemLibrary.prob_ode_rober\nDiffEqProblemLibrary.prob_ode_rigidbody"
},

{
    "location": "types/refined_ode_types.html#",
    "page": "Refined ODE Types",
    "title": "Refined ODE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Refined-ODE-Types-1",
    "page": "Refined ODE Types",
    "title": "Refined ODE Types",
    "category": "section",
    "text": "The refined ODE types are types that specify the ODE to a much greater degree of detail, and thus give the solver more information and make it easier to optimize. There are three different kinds of refined problems: split (IMEX) problems, partitioned problems, and constrained problems."
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-a-Split-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of a Split ODE Problem",
    "category": "section",
    "text": "To define a SplitODEProblem, you simply need to give a tuple of functions (f_1f_2ldotsf_n) and the initial condition u which define an ODE:fracdudt =  f_1(tu) + f_2(tu) + ldots + f_n(tu)f should be specified as f(t,u) (or in-place as f(t,u,du)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/refined_ode_types.html#Constructors-1",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SplitODEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-1",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions in the ODE.\nu0: The initial condition.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_ode_types.html#Special-Solver-Options-1",
    "page": "Refined ODE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Special-Solution-Fields-1",
    "page": "Refined ODE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "None. It returns a standard ODE solution."
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-a-Partitioned-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of a Partitioned ODE Problem",
    "category": "section",
    "text": "To define a PartitionedODEProblem, you need to give a tuple of functions (f_1f_2ldotsf_n) and the tuple of initial conditions (uv) (tuple of the same size) which define an ODE:fracdudt = f_1(tuv) \nfracdvdt = f_2(tuv) \nf should be specified as f(t,u,v,...) (or in-place as f(t,u,v,...,du)), and the initial conditions should be AbstractArrays (or numbers) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well. In some cases, the solvers may specify the functions in a split form, for example:fracdudt = f_1(tuv) + f_2(tuv) \nfracdvdt = f_3(tuv) \nSee the solver's documentation for the form it is expecting."
},

{
    "location": "types/refined_ode_types.html#Constructors-2",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "PartitionedODEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-2",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions for the ODE.\nu0: The tuple of initial conditions.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_ode_types.html#Special-Solver-Options-2",
    "page": "Refined ODE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Special-Solution-Fields-2",
    "page": "Refined ODE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-an-Second-Order-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of an Second Order ODE Problem",
    "category": "section",
    "text": "To define an ODE Problem, you simply need to give the function f and the initial condition u which define an ODE:u = f(tuu)f should be specified as f(t,u,du) (or in-place as f(t,u,du,ddu)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well.From this form, a partitioned ODEu = v \nv = f(tuv) is generated."
},

{
    "location": "types/refined_ode_types.html#Problem-Type-1",
    "page": "Refined ODE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Constructors-3",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SecondOrderODEProblem(f,u0,du0,tspan,callback=CallbackSet(),mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-3",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial condition.\ndu0: The initial derivative.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_ode_types.html#Special-Solver-Options-3",
    "page": "Refined ODE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Special-Solution-Fields-3",
    "page": "Refined ODE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-a-Constrained-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of a Constrained ODE Problem",
    "category": "section",
    "text": "The constrained ODE:fracdudt = f(tuv) \n0 = g(tuv)is a type of refined ODE which specifies a DAE."
},

{
    "location": "types/refined_ode_types.html#Constructors-4",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "ConstrainedODEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-4",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions for the ODE.\ng: The constraint equation.\nu0: The initial conditions.\nv0: The initial values for the purely-algebraic variables.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-a-Split-Constrained-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of a Split Constrained ODE Problem",
    "category": "section",
    "text": "The split constrained ODE:fracdudt = f_1(tuv) + f_2(tuv) +  + f_n(tuv) \n0 = g(tuv)is a type of refined ODE which specifies a DAE."
},

{
    "location": "types/refined_ode_types.html#Constructors-5",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SplitConstrainedODEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-5",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions for the ODE.\ng: The constraint equation.\nu0: The tuple of initial conditions.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_ode_types.html#Mathematical-Specification-of-a-Partitioned-Constrained-ODE-Problem-1",
    "page": "Refined ODE Types",
    "title": "Mathematical Specification of a Partitioned Constrained ODE Problem",
    "category": "section",
    "text": "The constrained ODE:fracdudt = f_1(tuv) \nfracdvdt = f_2(tuv) \n\n0 = g(tuv)is a type of refined ODE which specifies a DAE. As with the standard Partitioned problem, the solver may specify a special form which may result in splitting ODEs in some of the systems."
},

{
    "location": "types/refined_ode_types.html#Constructors-6",
    "page": "Refined ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "ConstrainedODEProblem(f,u0,v0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_ode_types.html#Fields-6",
    "page": "Refined ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions for the ODE.\ng: The constraint equation.\nu0: The tuple of initial conditions.\nv0: The tuple of initial values for the purely-algebraic variables.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/steady_state_types.html#",
    "page": "Steady State Types",
    "title": "Steady State Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/steady_state_types.html#Steady-State-Types-1",
    "page": "Steady State Types",
    "title": "Steady State Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/steady_state_types.html#Mathematical-Specification-of-a-Steady-State-Problem-1",
    "page": "Steady State Types",
    "title": "Mathematical Specification of a Steady State Problem",
    "category": "section",
    "text": "To define an Steady State Problem, you simply need to give the function f which defines the ODE:fracdudt = f(tu)and an initial guess u of where f(t,u)=0. f should be specified as f(t,u) (or in-place as f(t,u,du)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well.Note that for the steady-state to be defined, we must have that f is autonomous, that is f is independent of t. But the form which matches the standard ODE solver should still be used. The steady state solvers interpret the f by fixing t=0."
},

{
    "location": "types/steady_state_types.html#Problem-Type-1",
    "page": "Steady State Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/steady_state_types.html#Constructors-1",
    "page": "Steady State Types",
    "title": "Constructors",
    "category": "section",
    "text": "SteadyStateProblem(f,u0,mass_matrix=I)Additionally, the constructor from the ODEProblem is provided:SteadyStateProblem(prob::ODEProblem)"
},

{
    "location": "types/steady_state_types.html#Fields-1",
    "page": "Steady State Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial guess for the steady state.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/steady_state_types.html#Special-Solver-Options-1",
    "page": "Steady State Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/steady_state_types.html#Special-Solution-Fields-1",
    "page": "Steady State Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "The SteadyStateSolution type is different from the other DiffEq solutions because it does not have temporal information."
},

{
    "location": "types/sde_types.html#",
    "page": "SDE Types",
    "title": "SDE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/sde_types.html#SDE-Types-1",
    "page": "SDE Types",
    "title": "SDE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#Mathematical-Specification-of-a-SDE-Problem-1",
    "page": "SDE Types",
    "title": "Mathematical Specification of a SDE Problem",
    "category": "section",
    "text": "To define an SDE Problem, you simply need to give the forcing function f, the noise function g, and the initial condition u which define an SDE:du = f(tu)dt + g(tu)dWf and g should be specified as f(t,u) and  g(t,u) respectively, and u₀ should be an AbstractArray whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well. A vector of gs can also be defined to determine an SDE of higher Ito dimension."
},

{
    "location": "types/sde_types.html#Problem-Type-1",
    "page": "SDE Types",
    "title": "Problem Type",
    "category": "section",
    "text": "Wraps the data which defines an SDE problemu = f(ut)dt + g(ut)dWwith initial condition u0."
},

{
    "location": "types/sde_types.html#Constructors-1",
    "page": "SDE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SDEProblem(f,g,u0,tspan,noise=WHITE_NOISE,noise_rate_prototype=nothing) : Defines the SDE with the specified functions. The default noise is WHITE_NOISE."
},

{
    "location": "types/sde_types.html#Fields-1",
    "page": "SDE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The drift function in the SDE.\ng: The noise function in the SDE.\nu0: The initial condition.\ntspan: The timespan for the problem.\nnoise: The noise process applied to the noise upon generation. Defaults to Gaussian white noise. For information on defining different noise processes, see the noise process documentation page\nnoise_rate_prototype: A prototype type instance for the noise rates, that is the output g. It can be any type which overloads A_mul_B! with itself being the middle argument. Commonly, this is a matrix or sparse matrix. If this is not given, it defaults to nothing, which means the problem should be interpreted as having diagonal noise.  \ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/sde_types.html#Special-Solver-Options-1",
    "page": "SDE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#Special-Solution-Fields-1",
    "page": "SDE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "g: The noise function in the SDE."
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_linear",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_linear",
    "category": "Constant",
    "text": "du_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u0=1/2, with solution\n\nu(tu0W_t)=u0exp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_2Dlinear",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_2Dlinear",
    "category": "Constant",
    "text": "8 linear SDEs (as a 4x2 matrix):\n\ndu_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u0=1/2 with solution\n\nu(tu0W_t)=u0exp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_wave",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_wave",
    "category": "Constant",
    "text": "du_t = -frac1100sin(u)cos^3(u)dt + frac110cos^2(u_t) dW_t\n\nand initial condition u0=1.0 with solution\n\nu(tu0W_t)=arctan(fracW_t10 + tan(u0))\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_lorenz",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_lorenz",
    "category": "Constant",
    "text": "Lorenz Attractor with additive noise\n\nbeginalign\ndx = *(y-x)dt + dW_t \ndy = (x*(-z) - y)dt + dW_t \ndz = (x*y - *z)dt + dW_t \nendalign\n\nwith =10, =28, =83, =30 and inital condition u0=111.\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_cubic",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_cubic",
    "category": "Constant",
    "text": "du_t = frac14u(1-u^2)dt + frac12(1-u^2)dW_t\n\nand initial condtion u0=1/2, with solution\n\nu(tu0W_t)=frac(1+u0)exp(W_t)+u0-1(1+u0)exp(W_t)+1-u0\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_additive",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_additive",
    "category": "Constant",
    "text": "Additive noise problem\n\nu_t = (fracsqrt1+t-frac12(1+t)u_t)dt + fracsqrt1+tdW_t\n\nand initial condition u0=1.0 with α=0.1 and β=0.05, with solution\n\nu(tu0W_t)=fracu0sqrt1+t + frac(t+W_t)sqrt1+t\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_additivesystem",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_additivesystem",
    "category": "Constant",
    "text": "A multiple dimension extension of additiveSDEExample\n\n\n\n"
},

{
    "location": "types/sde_types.html#Example-Problems-1",
    "page": "SDE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_sde_linear, you can do something like:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_sde_linear\nsol = solve(prob)DiffEqProblemLibrary.prob_sde_linear\nDiffEqProblemLibrary.prob_sde_2Dlinear\nDiffEqProblemLibrary.prob_sde_wave\nDiffEqProblemLibrary.prob_sde_lorenz\nDiffEqProblemLibrary.prob_sde_cubic\nDiffEqProblemLibrary.prob_sde_additive\nDiffEqProblemLibrary.prob_sde_additivesystem"
},

{
    "location": "types/rode_types.html#",
    "page": "RODE Types",
    "title": "RODE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/rode_types.html#RODE-Types-1",
    "page": "RODE Types",
    "title": "RODE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/rode_types.html#Mathematical-Specification-of-a-RODE-Problem-1",
    "page": "RODE Types",
    "title": "Mathematical Specification of a RODE Problem",
    "category": "section",
    "text": "To define a RODE Problem, you simply need to give the function f and the initial condition u which define an ODE:fracdudt = f(tuW(t))where W(t) is a random process. f should be specified as f(t,u,W) (or in-place as f(t,u,W,du)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/rode_types.html#Constructors-1",
    "page": "RODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "RODEProblem(f,u0,tspan,noise=WHITE_NOISE,noise_prototype=nothing,callback=nothing,mass_matrix=I) : Defines the RODE with the specified functions. The default noise is WHITE_NOISE."
},

{
    "location": "types/rode_types.html#Fields-1",
    "page": "RODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The drift function in the SDE.\nu0: The initial condition.\ntspan: The timespan for the problem.\nnoise: The noise process applied to the noise upon generation. Defaults to Gaussian white noise. For information on defining different noise processes, see the noise process documentation page\nnoise_prototype: A prototype type instance for the noise vector. It defaults to nothing, which means the problem should be interpreted as having a noise vector whose size matches u0.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/dde_types.html#",
    "page": "DDE Types",
    "title": "DDE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/dde_types.html#DDE-Types-1",
    "page": "DDE Types",
    "title": "DDE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/dde_types.html#Mathematical-Specification-of-a-DDE-Problem-1",
    "page": "DDE Types",
    "title": "Mathematical Specification of a DDE Problem",
    "category": "section",
    "text": "To define a DDE Problem, you simply need to give the function f and the initial condition u0 which define an ODE:du = f(tuh)f should be specified as f(t,u,h) (or in-place as f(t,u,h,du)). h is the history function which is accessed for all delayed values. For example, the ith component delayed by a time tau is denoted by h(t-tau). Note that we are not limited to numbers or vectors for u0; one is allowed to provide u0 as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/dde_types.html#Problem-Type-1",
    "page": "DDE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/dde_types.html#Constructors-1",
    "page": "DDE Types",
    "title": "Constructors",
    "category": "section",
    "text": "ConstantLagDDEProblem(f,h,u0,lags,tspan,callback=nothing,mass_matrix=I)\nDDEProblem(f,h,u0,lags,tspan,callback=nothing,mass_matrix=I)"
},

{
    "location": "types/dde_types.html#Fields-1",
    "page": "DDE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nh: The history function for the ODE before t0.\nlags: An array of lags. For constant lag problems this should be numbers. For state-dependent delay problems this is a tuple of functions.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/dde_types.html#Special-Solver-Options-1",
    "page": "DDE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/dde_types.html#Special-Solution-Fields-1",
    "page": "DDE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#",
    "page": "DAE Types",
    "title": "DAE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/dae_types.html#DAE-Types-1",
    "page": "DAE Types",
    "title": "DAE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Mathematical-Specification-of-an-DAE-Problem-1",
    "page": "DAE Types",
    "title": "Mathematical Specification of an DAE Problem",
    "category": "section",
    "text": "To define a DAE Problem, you simply need to give the function f and the initial condition u which define an ODE:0 = f(tudu)f should be specified as f(t,u,du) (or in-place as f(t,u,du,resid)). Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/dae_types.html#Problem-Type-1",
    "page": "DAE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Constructors-1",
    "page": "DAE Types",
    "title": "Constructors",
    "category": "section",
    "text": "DAEProblem(f,u0,du0,tspan) : Defines the ODE with the specified functions."
},

{
    "location": "types/dae_types.html#Fields-1",
    "page": "DAE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial condition.\ndu0: The initial condition for the derivative.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to a black CallbackSet, which will have no effect."
},

{
    "location": "types/dae_types.html#Special-Solver-Options-1",
    "page": "DAE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Special-Solution-Fields-1",
    "page": "DAE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "du: The saved derivative values."
},

{
    "location": "types/dae_types.html#Example-Problems-1",
    "page": "DAE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_dae_resrob, you can do something like:#Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_dae_resrob\nsol = solve(prob,IDA())"
},

{
    "location": "types/refined_dae_types.html#",
    "page": "Refined DAE Types",
    "title": "Refined DAE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/refined_dae_types.html#Refined-DAE-Types-1",
    "page": "Refined DAE Types",
    "title": "Refined DAE Types",
    "category": "section",
    "text": "The refined DAE types are types that specify the DAE to a much greater degree of detail, and thus give the solver more information and make it easier to optimize. There are three different kinds of refined problems: split (IMEX) problems, partitioned problems, and constrained problems."
},

{
    "location": "types/refined_dae_types.html#Mathematical-Specification-of-a-Split-DAE-Problem-1",
    "page": "Refined DAE Types",
    "title": "Mathematical Specification of a Split DAE Problem",
    "category": "section",
    "text": "To define a SplitDAEProblem, you simply need to give a tuple of functions (f_1f_2ldotsf_n) and the initial condition u which define an ODE:0 = f_1(tuu) + f_2(tuu) + ldots + f_n(tuu)f should be specified as f(t,u,du) (or in-place as f(t,u,du,res)), and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u."
},

{
    "location": "types/refined_dae_types.html#Constructors-1",
    "page": "Refined DAE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SplitDAEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_dae_types.html#Fields-1",
    "page": "Refined DAE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions in the ODE.\nu0: The initial condition.\ndu0: The initial derivative condition.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_dae_types.html#Special-Solver-Options-1",
    "page": "Refined DAE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_dae_types.html#Special-Solution-Fields-1",
    "page": "Refined DAE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": "None. It returns a standard DAE solution."
},

{
    "location": "types/refined_dae_types.html#Mathematical-Specification-of-a-Partitioned-ODE-Problem-1",
    "page": "Refined DAE Types",
    "title": "Mathematical Specification of a Partitioned ODE Problem",
    "category": "section",
    "text": "To define a PartitionedDAEProblem, you need to give a tuple of functions (f_1f_2ldotsf_n) and the tuple of initial conditions (uv) (tuple of the same size) which define an ODE:fracdudt = f_1(tuvdudv) \nfracdvdt = f_2(tuvdudv) \nf should be specified as f(t,u,v,...,du,dv,...) (or in-place as f(t,u,v,...,du,dv,...,res)), and the initial conditions should be AbstractArrays (or numbers) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀; one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/refined_dae_types.html#Constructors-2",
    "page": "Refined DAE Types",
    "title": "Constructors",
    "category": "section",
    "text": "PartitionedDAEProblem(f,u0,tspan,callback=nothing,mass_matrix=I) : Defines the ODE with the specified functions."
},

{
    "location": "types/refined_dae_types.html#Fields-2",
    "page": "Refined DAE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The tuple of functions for the ODE.\nu0: The tuple of initial conditions.\ndu0: The tuple of initial derivatives.\ntspan: The timespan for the problem.\ncallback: A callback to be applied to every solver which uses the problem. Defaults to nothing.\nmass_matrix: The mass-matrix. Defaults to I, the UniformScaling identity matrix."
},

{
    "location": "types/refined_dae_types.html#Special-Solver-Options-2",
    "page": "Refined DAE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/refined_dae_types.html#Special-Solution-Fields-2",
    "page": "Refined DAE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/jump_types.html#",
    "page": "Jump Types",
    "title": "Jump Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/jump_types.html#Jump-Types-1",
    "page": "Jump Types",
    "title": "Jump Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/jump_types.html#Mathematical-Specification-of-an-problem-with-jumps-1",
    "page": "Jump Types",
    "title": "Mathematical Specification of an problem with jumps",
    "category": "section",
    "text": "Jumps are defined as a Poisson process which occur according to some rate. When multiple jumps are together, the process is a compound Poisson process. On their own, a jump equation on is continuous-time Markov Chain where the time to the next jump is exponentially distributed as calculated by the rate. This type of process, known in biology as \"Gillespie discrete stochastic simulations\" and modeled by the Chemical Master Equation (CME), is the same thing as adding jumps to a DiscreteProblem. However, any differential equation can be extended by jumps as well. For example, we have an ODE with jumps, denoted byfracdudt = f(tu) +  h_i(tu)N_i(t)where N_i is a Poisson counter of rate lambda_i(tu). Extending a stochastic differential equation to have jumps is commonly known as a Jump Diffusion, and is denoted byfracdudt = f(tu) + g(ut)dW +  h_i(tu)N_i(t)"
},

{
    "location": "types/jump_types.html#Variable-and-Constant-Rate-Jumps-1",
    "page": "Jump Types",
    "title": "Variable and Constant Rate Jumps",
    "category": "section",
    "text": "We denote a jump as variable rate if its rate function is dependent on values which may change between constant rate jumps. For example, if there are multiple jumps whose rates only change when one of them occur, than that set of jumps is a constant rate jump. If the jump's rate depends on the differential equation, time, or by some value which changes outside of some constant rate jump, then it is denoted as variable."
},

{
    "location": "types/jump_types.html#Defining-a-Constant-Rate-Jump-1",
    "page": "Jump Types",
    "title": "Defining a Constant Rate Jump",
    "category": "section",
    "text": "The constructor for a ConstantRateJump is:ConstantRateJump(rate,affect!;save_positions=(true,true))rate(t,u) is a function which calculates the rate given the time and the state.\naffect!(integrator) is the effect on the equation, using the integrator interface."
},

{
    "location": "types/jump_types.html#Defining-a-Variable-Rate-Jump-1",
    "page": "Jump Types",
    "title": "Defining a Variable Rate Jump",
    "category": "section",
    "text": "The constructor for a VariableRateJump is:VariableRateJump(rate,affect!;\n                   idxs = nothing,\n                   rootfind=true,\n                   save_positions=(true,true),\n                   interp_points=10,\n                   abstol=1e-12,reltol=0)Note that this is the same as defining a ContinuousCallback, except that instead of the condition function, you provide a rate(t,u) function for the rate at a given time and state."
},

{
    "location": "types/jump_types.html#Defining-a-Jump-Problem-1",
    "page": "Jump Types",
    "title": "Defining a Jump Problem",
    "category": "section",
    "text": "To define a JumpProblem, you must first define the basic problem. This can be a DiscreteProblem if there is no differential equation, or an ODE/SDE/DDE/DAE if you would like to augment a differential equation with jumps. Denote this previously defined problem as prob. Then the constructor for the jump problem is:JumpProblem(prob,aggregator::Direct,jumps::JumpSet;\n            save_positions = typeof(prob) <: AbstractDiscreteProblem ? (false,true) : (true,true))The aggregator is the method for aggregating the constant jumps. These are defined below. jumps is a JumpSet which is just a gathering of jumps. Instead of passing a JumpSet, one may just pass a list of jumps themselves. For example:JumpProblem(prob,aggregator,jump1,jump2)and the internals will automatically build the JumpSet. save_positions is the save_positions argument built by the aggregation of the constant rate jumps."
},

{
    "location": "types/jump_types.html#Constant-Rate-Jump-Aggregator-1",
    "page": "Jump Types",
    "title": "Constant Rate Jump Aggregator",
    "category": "section",
    "text": "The constant rate jump aggregator is the method by which the constant rate jumps are lumped together. This is required in all algorithms for both speed and accuracy. The current methods are:Direct: the Gillespie SSA Direct method.To pass the aggregator, pass the instantiation of the type. For example:JumpProblem(prob,Direct(),jump1,jump2)will build a problem where the constant rate jumps are solved using Gillespie's Direct SSA method."
},

{
    "location": "types/fem_types.html#",
    "page": "FEM Types",
    "title": "FEM Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/fem_types.html#FEM-Types-1",
    "page": "FEM Types",
    "title": "FEM Types",
    "category": "section",
    "text": "Below are the definitions of the types which specify problems. Some general notes are:(t,x) vs (t,x,y): Mathematically one normally specifies equations in 2D as f(txy). However, in this code we use x as a vector. Thus you can think of x=x[:,1] and y=x[:,2]. Thus input equations are of the form f(x,t) no matter the dimension. If time is not included in the problem (for example, a Poisson equation problem), then we use f(x). An example is the equation u(xy)= sin(2x)cos(2y)(8^2) would be specified as sol(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π).\nLinearity: If the equation has a linear term, they are specified with functions f(t,x). If it is nonlinear, it is specified with functions f(t,x,u). The boundary conditions are always (t,x)\nStochastic: By default the equation is deterministic. For each equation, one can specify a σ term which adds a stochastic (txu)dW_t term to the equation (or with (tx)dW_t if linear, must match f). dW_t corresponds to the type of noise which is chosen. By default this is space-time Gaussian white noise."
},

{
    "location": "types/fem_types.html#Poisson-Equation-Problem-1",
    "page": "FEM Types",
    "title": "Poisson Equation Problem",
    "category": "section",
    "text": "Wraps the data that defines a 2D linear Poisson equation problem:-u = fwith bounday conditions gD on the Dirichlet boundary and gN on the Neumann boundary. Linearity is determined by whether the forcing function f is a function of one variable (x) or two (u,x) (with x=[:,1] and y=[:,2]).If the keyword σ is given, then this wraps the data that defines a 2D stochastic heat equation-u = f + dW"
},

{
    "location": "types/fem_types.html#Constructors-1",
    "page": "FEM Types",
    "title": "Constructors",
    "category": "section",
    "text": "PoissonProblem(f,analytic,Du,mesh): Defines the Dirichlet problem with analytical solution analytic, solution gradient Du = [u_x,u_y], and forcing function fPoissonProblem(u0,f,mesh): Defines the problem with initial value u0 (as a function) and f. If your initial data is a vector, wrap it as u0(x) = vector.Note: If all functions are of (x), then the program assumes it's linear. Write your functions using the math to program syntax translation: x = x[:,1] and y = x[:,2]. Use f=f(u,x) and σ=σ(u,x) (if specified) for nonlinear problems (with the boundary conditions still (x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help."
},

{
    "location": "types/fem_types.html#Keyword-Arguments-1",
    "page": "FEM Types",
    "title": "Keyword Arguments",
    "category": "section",
    "text": "gD = Dirichlet boundary function\ngN = Neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = The number of variables in the Poisson system. Automatically calculated in many cases.\nD = Vector of diffusion coefficients. Defaults is D=ones(1,numvars)."
},

{
    "location": "types/fem_types.html#Heat-Equation-Problem-1",
    "page": "FEM Types",
    "title": "Heat Equation Problem",
    "category": "section",
    "text": "Wraps the data that defines a 2D heat equation problem:u_t = u + fwith bounday conditions gD on the Dirichlet boundary and gN on the Neumann boundary. Linearity is determined by whether the forcing function f is a function of two variables (t,x) or three (t,x,u) (with x=[:,1] and y=[:,2]).If the keyword σ is given, then this wraps the data that defines a 2D stochastic heat equation.u_t = u + f + dW_t"
},

{
    "location": "types/fem_types.html#Constructors-2",
    "page": "FEM Types",
    "title": "Constructors",
    "category": "section",
    "text": "HeatProblem(analytic,Du,f,mesh): Defines the Dirichlet problem with solution analytic, solution gradient Du = [u_x,u_y], and the forcing function f.\nHeatProblem(u0,f,mesh): Defines the problem with initial value u0 (as a function) and f. If your initial data is a vector, wrap it as u0(x) = vector.Note: If all functions are of (t,x), then the program assumes it's linear. Write your functions using the math to program syntax translation: x = x[:,1] and y = x[:,2]. Use f=f(t,x,u) and σ=σ(t,x,u) (if specified) for nonlinear problems (with the boundary conditions still (t,x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help."
},

{
    "location": "types/fem_types.html#Keyword-Arguments-2",
    "page": "FEM Types",
    "title": "Keyword Arguments",
    "category": "section",
    "text": "gD = Dirichlet boundary function\ngN = Neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = Number of variables in the system. Automatically calculated from u0 in most cases.\nD = Array which defines the diffusion coefficients. Default is D=ones(1,numvars)."
},

{
    "location": "types/fem_types.html#Example-Problems-1",
    "page": "FEM Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, you need to do:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=5u-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_noisywave",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_noisywave",
    "category": "Constant",
    "text": "Problem with deterministic solution: u(xy)= sin(2x)cos(2y)(8^2) and additive noise (xy)=5\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeathsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeathsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=1-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_wave",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_wave",
    "category": "Constant",
    "text": "Problem defined by the solution: u(xy)= sin(2x)cos(2y)(8^2)\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeath",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeath",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#Poisson-Equation-1",
    "page": "FEM Types",
    "title": "Poisson Equation",
    "category": "section",
    "text": "DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem\nDiffEqProblemLibrary.prob_poisson_noisywave\nDiffEqProblemLibrary.prob_poisson_birthdeathsystem\nDiffEqProblemLibrary.prob_poisson_wave\nDiffEqProblemLibrary.prob_poisson_birthdeath"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_birthdeathsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_birthdeathsystem",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion which starts at 1/2 and solves the system f(u)=1-u2 and f(v)=1-v\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_birthdeathinteractingsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_birthdeathinteractingsystem",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion which starts with 1/2 and solves the system f(u)=1-u2 and f(v)=5u-v\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_diffuse",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_diffuse",
    "category": "Constant",
    "text": "Example problem defined by the solution:\n\nu(xyt)=exp(-10((x-frac12)^2 + (y-frac12)^2 )-t)\n\nThis is a Gaussian centered at (frac12frac12) which diffuses over time.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_stochasticbirthdeath",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_stochasticbirthdeath",
    "category": "Constant",
    "text": "Homogenous stochastic reaction-diffusion problem which starts with 0 and solves with f(u)=1-u2 with noise (u)=10u^2\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_moving",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_moving",
    "category": "Constant",
    "text": "Example problem defined by the solution:\n\nu(xyt)=frac110(1-exp(-100(t-frac12)^2))exp(-25((x-t+05)^2 + (y-t+05)^2))\n\nThis will have a mound which moves across the screen. Good animation test.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_pure",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_pure",
    "category": "Constant",
    "text": "Example problem which starts with a Dirac δ cenetered at (0.5,0.5) and solves with f=gD=0. This gives the Green's function solution.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_femheat_birthdeath",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_femheat_birthdeath",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion problem which starts with 0 and solves with f(u)=1-u2\n\n\n\n"
},

{
    "location": "types/fem_types.html#Heat-Equation-1",
    "page": "FEM Types",
    "title": "Heat Equation",
    "category": "section",
    "text": "DiffEqProblemLibrary.prob_femheat_birthdeathsystem\nDiffEqProblemLibrary.prob_femheat_birthdeathinteractingsystem\nDiffEqProblemLibrary.prob_femheat_diffuse\nDiffEqProblemLibrary.prob_femheat_stochasticbirthdeath\nDiffEqProblemLibrary.prob_femheat_moving\nDiffEqProblemLibrary.prob_femheat_pure\nDiffEqProblemLibrary.prob_femheat_birthdeath"
},

{
    "location": "solvers/discrete_solve.html#",
    "page": "Discrete Solvers",
    "title": "Discrete Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/discrete_solve.html#Discrete-Solvers-1",
    "page": "Discrete Solvers",
    "title": "Discrete Solvers",
    "category": "section",
    "text": "solve(prob::DiscreteProblem,alg;kwargs)Solves the discrete function map defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen."
},

{
    "location": "solvers/discrete_solve.html#Recommended-Methods-1",
    "page": "Discrete Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "The implementation for solving discrete equations is the Discrete algorithm in OrdinaryDiffEq.jl. It has zero overhead and uses compilation to build a separate setup that allows you to use the common interface (including events/callbacks) to solve function maps, along with everything else like plot recipes, while completely ignoring the ODE functionality related to continuous equations (except for a tiny bit of initialization)."
},

{
    "location": "solvers/discrete_solve.html#Discrete-Algorithm-1",
    "page": "Discrete Solvers",
    "title": "Discrete Algorithm",
    "category": "section",
    "text": "OrdinaryDiffEq.jl also contains the Discrete algorithm which lets you solve a problem where f is a map: u_n+1 = f(t_nu_n). It has a piecewise constant interpolation and allows for all of the callback/event handling capabilities (of course, with rootfind=false. If a ContinuousCallback is given, it's always assumed rootfind=false).The constructor is:Discrete(;apply_map=false,scale_by_time=false)If apply_map=false, f is completely ignored. If apply_map=true, then every step is the updateu_n+1 = f(t_nu_n)If in addition scale_by_time=true, then every step is the updateu_n+1 = u_n + dtf(t_nu_n)Notice that this is the same as updates from the Euler method, except in this case we assume that its a discrete change and thus the interpolation is piecewise constant.As a shorthand,FunctionMap(scale_by_time=false)is a Discrete with apply_map=true, and thus corresponds to the function map equationu_n+1 = f(t_nu_n)"
},

{
    "location": "solvers/ode_solve.html#",
    "page": "ODE Solvers",
    "title": "ODE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/ode_solve.html#ODE-Solvers-1",
    "page": "ODE Solvers",
    "title": "ODE Solvers",
    "category": "section",
    "text": "solve(prob::ODEProblem,alg;kwargs)Solves the ODE defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen."
},

{
    "location": "solvers/ode_solve.html#Recommended-Methods-1",
    "page": "ODE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "It is suggested that you try choosing an algorithm using the alg_hints keyword argument. However, in some cases you may want something specific, or you may just be curious. This guide is to help you choose the right algorithm."
},

{
    "location": "solvers/ode_solve.html#Non-Stiff-Problems-1",
    "page": "ODE Solvers",
    "title": "Non-Stiff Problems",
    "category": "section",
    "text": "For non-stiff problems, the native OrdinaryDiffEq.jl algorithms are vastly more efficient than the other choices. For most non-stiff problems, we recommend Tsit5. When more robust error control is required, BS5 is a good choice. For fast solving at lower tolerances, we recommend BS3. For tolerances which are at about the truncation error of Float64 (1e-16), we recommend Vern6, Vern7, or Vern8 as efficient choices.For high accuracy non-stiff solving (BigFloat and tolerances like <1e-20), we recommend the Feagin12 or Feagin14 methods. These are more robust than Adams-Bashforth methods to discontinuities and achieve very high precision, and are much more efficient than the extrapolation methods. Note that the Feagin methods are the only high-order optimized methods which do not include a high-order interpolant (they do include a 3rd order Hermite interpolation if needed). If a high-order method is needed with a high order interpolant, then you should choose Vern9 which is Order 9 with an Order 9 interpolant."
},

{
    "location": "solvers/ode_solve.html#Stiff-Problems-1",
    "page": "ODE Solvers",
    "title": "Stiff Problems",
    "category": "section",
    "text": "For mildly stiff problems at low tolerances it is recommended that you use Rosenbrock23 As a native DifferentialEquations.jl solver, many Julia-defined numbers will work. This method uses ForwardDiff to automatically guess the Jacobian. For faster solving when the Jacobian is known, use radau. For highly stiff problems where Julia-defined numbers need to be used (SIUnits, Arbs), Trapezoid is the current best choice. However, for the most efficient highly stiff solvers, use radau or CVODE_BDF provided by wrappers to the ODEInterface and Sundials packages respectively (see the conditional dependencies documentation). These algorithms require that the number types are Float64."
},

{
    "location": "solvers/ode_solve.html#Full-List-of-Methods-1",
    "page": "ODE Solvers",
    "title": "Full List of Methods",
    "category": "section",
    "text": "Choose one of these methods with the alg keyword in solve."
},

{
    "location": "solvers/ode_solve.html#OrdinaryDiffEq.jl-1",
    "page": "ODE Solvers",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "Unless otherwise specified, the OrdinaryDiffEq algorithms all come with a 3rd order Hermite polynomial interpolation. The algorithms denoted as having a \"free\" interpolation means that no extra steps are required for the interpolation. For the non-free higher order interpolating functions, the extra steps are computed lazily (i.e. not during the solve).The OrdinaryDiffEq.jl algorithms achieve the highest performance for non-stiff equations while being the most generic: accepting the most Julia-based types, allow for sophisticated event handling, etc. They are recommended for all non-stiff problems. For stiff problems, the algorithms are currently not as high of order or as well-optimized as the ODEInterface.jl or Sundials.jl algorithms, and thus if the problem is on arrays of Float64, they are recommended. However, the stiff methods from OrdinaryDiffEq.jl are able to handle a larger generality of number types (arbitrary precision, etc.) and thus are recommended for stiff problems on for non-Float64 numbers.Euler- The canonical forward Euler method.\nMidpoint - The second order midpoint method.\nSSPRK22 - The two-stage, second order strong stability preserving method of Shu and Osher.\nSSPRK33 - The three-stage, third order strong stability preserving method of Shu and Osher.\nSSPRK104 - The ten-stage, fourth order strong stability preserving method of Ketcheson.\nRK4 - The canonical Runge-Kutta Order 4 method.\nBS3 - Bogacki-Shampine 3/2 method.\nDP5 - Dormand-Prince's 5/4 Runge-Kutta method. (free 4th order interpolant)\nTsit5 - Tsitouras 5/4 Runge-Kutta method. (free 4th order interpolant)\nBS5 - Bogacki-Shampine 5/4 Runge-Kutta method. (5th order interpolant)\nVern6 - Verner's \"Most Efficient\" 6/5 Runge-Kutta method. (6th order interpolant)\nVern7 - Verner's \"Most Efficient\" 7/6 Runge-Kutta method. (7th order interpolant)\nTanYam7 - Tanaka-Yamashita 7 Runge-Kutta method.\nDP8 - Hairer's 8/5/3 adaption of the Dormand-Prince 8 method Runge-Kutta method. (7th order interpolant)\nTsitPap8 - Tsitouras-Papakostas 8/7 Runge-Kutta method.\nVern8 - Verner's \"Most Efficient\" 8/7 Runge-Kutta method. (8th order interpolant)\nVern9 - Verner's \"Most Efficient\" 9/8 Runge-Kutta method. (9th order interpolant)\nFeagin10 - Feagin's 10th-order Runge-Kutta method.\nFeagin12 - Feagin's 12th-order Runge-Kutta method.\nFeagin14 - Feagin's 14th-order Runge-Kutta method.\nImplicitEuler - A 1st order implicit solver. Unconditionally stable.\nTrapezoid - A second order unconditionally stable implicit solver. Good for highly stiff.\nRosenbrock23 - An Order 2/3 L-Stable fast solver which is good for mildy stiff equations with oscillations at low tolerances.\nRosenbrock32 - An Order 3/2 A-Stable fast solver which is good for mildy stiff equations without oscillations at low tolerances. Note that this method is prone to instability in the presence of oscillations, so use with caution.Example usage:alg = Tsit5()\nsolve(prob,alg)  The following methods allow for specification of linsolve: the linear solver which is used:Rosenbrock23\nRosenbrock32For more information on specifying the linear solver, see the manual page on solver specificationAdditionally, there is the tableau method:ExplicitRK - A general Runge-Kutta solver which takes in a tableau. Can be adaptive. Tableausare specified via the keyword argument tab=tableau. The default tableau is   for Dormand-Prince 4/5. Other supplied tableaus can be found in the Supplied Tableaus section.Example usage:alg = ExplicitRK(tableau=constructDormandPrince())\nsolve(prob,alg)"
},

{
    "location": "solvers/ode_solve.html#CompositeAlgorithm-1",
    "page": "ODE Solvers",
    "title": "CompositeAlgorithm",
    "category": "section",
    "text": "One unique feature of OrdinaryDiffEq.jl is the CompositeAlgorithm, which allows you to, with very minimal overhead, design a multimethod which switches between chosen algorithms as needed. The syntax is CompositeAlgorthm(algtup,choice_function) where algtup is a tuple of OrdinaryDiffEq.jl algorithms, and choice_function is a function which declares which method to use in the following step. For example, we can design a multimethod which uses Tsit5() but switches to Vern7() whenever dt is too small:choice_function(integrator) = (Int(integrator.dt<0.001) + 1)\nalg_switch = CompositeAlgorithm((Tsit5(),Vern7()),choice_function)The choice_function takes in an integrator and thus all of the features available in the Integrator Interface can be used in the choice function."
},

{
    "location": "solvers/ode_solve.html#Sundials.jl-1",
    "page": "ODE Solvers",
    "title": "Sundials.jl",
    "category": "section",
    "text": "The Sundials suite is built around multistep methods. These methods are more efficient than other methods when the cost of the function calculations is really high, but for less costly functions the cost of nurturing the timestep overweighs the benefits. However, the BDF method is a classic method for stiff equations and \"generally works\".CVODE_BDF - CVode Backward Differentiation Formula (BDF) solver.\nCVODE_Adams - CVode Adams-Moulton solver.Note that the constructors for the Sundials algorithms take two arguments:method - This is the method for solving the implicit equation. For BDF this defaults to :Newton while for Adams this defaults to :Functional. These choices match the recommended pairing in the Sundials.jl manual. However, note that using the :Newton method may take less iterations but requires more memory than the :Function iteration approach.\nlinearsolver - This is the linear solver which is used in the :Newton method.The choices for the linear solver are::Dense - A dense linear solver.\n:Band - A solver specialized for banded Jacobians. If used, you must set the position of the upper and lower non-zero diagonals via jac_upper and jac_lower.\n:Diagonal - This method is specialized for diagonal Jacobians.\nBCG - A Biconjugate gradient method.\nTFQMR - A TFQMR method.Example:CVODE_BDF() # BDF method using Newton + Dense solver\nCVODE_BDF(method=:Functional) # BDF method using Functional iterations\nCVODE_BDF(linear_solver=:Band,jac_upper=3,jac_lower=3) # Banded solver with nonzero diagonals 3 up and 3 down\nCVODE_BDF(linear_solver=:BCG) # Biconjugate gradient method                                   "
},

{
    "location": "solvers/ode_solve.html#ODE.jl-1",
    "page": "ODE Solvers",
    "title": "ODE.jl",
    "category": "section",
    "text": "ode23 - Bogacki-Shampine's order 2/3 Runge-Kutta  method\node45 - A Dormand-Prince order 4/5 Runge-Kutta method\node23s - A modified Rosenbrock order 2/3 method due to Shampine\node78 - A Fehlburg order 7/8 Runge-Kutta method\node4 - The classic Runge-Kutta order 4 method\node4ms - A fixed-step, fixed order Adams-Bashforth-Moulton method\node4s - A 4th order Rosenbrock method due to Shampine"
},

{
    "location": "solvers/ode_solve.html#ODEInterface.jl-1",
    "page": "ODE Solvers",
    "title": "ODEInterface.jl",
    "category": "section",
    "text": "The ODEInterface algorithms are the classic Hairer Fortran algorithms. While the non-stiff algorithms are superseded by the more featured and higher performance Julia implementations from OrdinaryDiffEq.jl, the stiff solvers such as radau are some of the most efficient methods available (but are restricted for use on arrays of Float64).Note that this setup is not automatically included with DifferentialEquaitons.jl. To use the following algorithms, you must install and use ODEInterfaceDiffEq.jl:Pkg.add(\"ODEInterfaceDiffEq\")\nusing ODEInterfaceDiffEqdopri5 - Hairer's classic implementation of the Dormand-Prince 4/5 method.\ndop853 - Explicit Runge-Kutta 8(5,3) by Dormand-Prince.\nodex - GBS extrapolation-algorithm based on the midpoint rule.\nseulex - Extrapolation-algorithm based on the linear implicit Euler method.\nradau - Implicit Runge-Kutta (Radau IIA) of variable order between 5 and 13.\nradau5 - Implicit Runge-Kutta method (Radau IIA) of order 5.\nrodas - Rosenbrock 4(3) method."
},

{
    "location": "solvers/ode_solve.html#LSODA.jl-1",
    "page": "ODE Solvers",
    "title": "LSODA.jl",
    "category": "section",
    "text": "This setup provides a wrapper to the algorithm LSODA, a well-known method which uses switching to solve both stiff and non-stiff equations.lsoda - The LSODA wrapper algorithm.Note that this setup is not automatically included with DifferentialEquaitons.jl. To use the following algorithms, you must install and use LSODA.jl:Pkg.add(\"LSODA\")\nusing LSODA"
},

{
    "location": "solvers/ode_solve.html#List-of-Supplied-Tableaus-1",
    "page": "ODE Solvers",
    "title": "List of Supplied Tableaus",
    "category": "section",
    "text": "A large variety of tableaus have been supplied by default via DiffEqDevTools.jl. The list of tableaus can be found in the developer docs. For the most useful and common algorithms, a hand-optimized version is supplied in OrdinaryDiffEq.jl which is recommended for general uses (i.e. use DP5 instead of ExplicitRK with tableau=constructDormandPrince()). However, these serve as a good method for comparing between tableaus and understanding the pros/cons of the methods. Implemented are every published tableau (that I know exists). Note that user-defined tableaus also are accepted. To see how to define a tableau, checkout the premade tableau source code. Tableau docstrings should have appropriate citations (if not, file an issue).Plot recipes are provided which will plot the stability region for a given tableau."
},

{
    "location": "solvers/refined_ode_solve.html#",
    "page": "Refined ODE Solvers",
    "title": "Refined ODE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/refined_ode_solve.html#Refined-ODE-Solvers-1",
    "page": "Refined ODE Solvers",
    "title": "Refined ODE Solvers",
    "category": "section",
    "text": "solve(prob::ODEProblem,alg;kwargs)Solves the Refined ODE problems defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen.This area is still under major development."
},

{
    "location": "solvers/refined_ode_solve.html#Special-Forms-1",
    "page": "Refined ODE Solvers",
    "title": "Special Forms",
    "category": "section",
    "text": "Many of the integrators in this category require special forms. For example, sometimes an integrator may require that a certain argument is missing. Instead of changing the function signature, keep the function signature but make sure the function ignores the appropriate argument.For example, one type of special form is the dynamical ODE:fracdudt = f_1(tv) \nfracdvdt = f_2(tu) \nThis is a Partitioned ODE partitioned into two groups, so the functions should be specified as f1(t,x,v,dx) and f2(t,x,v,dx) (in the inplace form). However, this specification states that f1 would be independent of x, and f2 should be independent of v. Followed the requirements for the integrator is required to achieve the suggested accuracy."
},

{
    "location": "solvers/refined_ode_solve.html#Note-About-OrdinaryDiffEq.jl-1",
    "page": "Refined ODE Solvers",
    "title": "Note About OrdinaryDiffEq.jl",
    "category": "section",
    "text": "Unless otherwise specified, the OrdinaryDiffEq algorithms all come with a 3rd order Hermite polynomial interpolation. The algorithms denoted as having a \"free\" interpolation means that no extra steps are required for the interpolation. For the non-free higher order interpolating functions, the extra steps are computed lazily (i.e. not during the solve)."
},

{
    "location": "solvers/refined_ode_solve.html#Functional-Forms-1",
    "page": "Refined ODE Solvers",
    "title": "Functional Forms",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/refined_ode_solve.html#Dynamical-ODE-1",
    "page": "Refined ODE Solvers",
    "title": "Dynamical ODE",
    "category": "section",
    "text": "These algorithms require a Partitioned ODE of the form:fracdudt = f_1(tv) \nfracdvdt = f_2(tu) This is a Partitioned ODE partitioned into two groups, so the functions should be specified as f1(t,u,v,dx) and f2(t,u,v,dx) (in the inplace form), where f1 is independent of x and f2 is independent of v. This includes discretizations arising from SecondOrderODEProblems where the velocity is not used in the acceleration function.The appropriate algorithms for this form are:"
},

{
    "location": "solvers/refined_ode_solve.html#OrdinaryDiffEq.jl-1",
    "page": "Refined ODE Solvers",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "SymplecticEuler: First order explicit symplectic integrator\nVelocityVerlet: 2nd order explicit symplectic integrator. Not yet implemented."
},

{
    "location": "solvers/refined_ode_solve.html#Implicit-Explicit-(IMEX)-ODE-1",
    "page": "Refined ODE Solvers",
    "title": "Implicit-Explicit (IMEX) ODE",
    "category": "section",
    "text": "The Implicit-Explicit (IMEX) ODE is a SplitODEProblem with two functions:fracdudt =  f_1(tu) + f_2(tu)where the first function is the stiff part and the second function is the non-stiff part (implicit integration on f1, explicit integration on f2).The appropriate algorithms for this form are:"
},

{
    "location": "solvers/refined_ode_solve.html#OrdinaryDiffEq.jl-2",
    "page": "Refined ODE Solvers",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "SplitEuler: 1st order fully explicit method. Used for testing accuracy of splits."
},

{
    "location": "solvers/refined_ode_solve.html#Sundials.jl-1",
    "page": "Refined ODE Solvers",
    "title": "Sundials.jl",
    "category": "section",
    "text": "ARKODE: An additive Runge-Kutta method. Not yet implemented."
},

{
    "location": "solvers/refined_ode_solve.html#Linear-Nonlinear-(LNL)-ODE-1",
    "page": "Refined ODE Solvers",
    "title": "Linear-Nonlinear (LNL) ODE",
    "category": "section",
    "text": "The Linear-Nonlinear (LNL) ODE is a SplitODEProblem with two functions:fracdudt =  f_1(tu) + f_2(tu)where the first function is a linear operator and the second function is the non-stiff part (implicit integration on f1, explicit integration on f2).The appropriate algorithms for this form are:"
},

{
    "location": "solvers/refined_ode_solve.html#OrdinaryDiffEq.jl-3",
    "page": "Refined ODE Solvers",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "IIF1 - First order Implicit Integrating Factor method. Not yet implemented.\nIIF2 - Second order Implicit Integrating Factor method. Not yet implemented.\nETD1 - First order Exponential Time Differencing method. Not yet implemented.\nETD2 - Second order Exponential Time Differencing method. Not yet implemented.\nExpEuler - First order exponential Euler scheme. Not yet implemented.\nNorsettEuler - First order exponential-RK scheme. Not yet implemented."
},

{
    "location": "solvers/steady_state_solve.html#",
    "page": "Steady State Solvers",
    "title": "Steady State Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/steady_state_solve.html#Steady-State-Solvers-1",
    "page": "Steady State Solvers",
    "title": "Steady State Solvers",
    "category": "section",
    "text": "solve(prob::SteadyStateProblem,alg;kwargs)Solves for the steady states in the problem defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen."
},

{
    "location": "solvers/steady_state_solve.html#Recommended-Methods-1",
    "page": "Steady State Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "Currently the only method is SSRootfind and so I am pretty sure it's the best option right now."
},

{
    "location": "solvers/steady_state_solve.html#Full-List-of-Methods-1",
    "page": "Steady State Solvers",
    "title": "Full List of Methods",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/steady_state_solve.html#SteadyStateDiffEq.jl-1",
    "page": "Steady State Solvers",
    "title": "SteadyStateDiffEq.jl",
    "category": "section",
    "text": "SSRootfind : Using a rootfinding algorithm to find a steady state. Defaults to using NLsolve.jl. A different algorithm can be specified via the nlsolve keyword argument."
},

{
    "location": "solvers/sde_solve.html#",
    "page": "SDE Solvers",
    "title": "SDE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#SDE-Solvers-1",
    "page": "SDE Solvers",
    "title": "SDE Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#Recommended-Methods-1",
    "page": "SDE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "For most diagonal and scalar noise problems where a good amount of accuracy is required and stiffness may be an issue, the SRIW1Optimized algorithm should do well. If the problem has additive noise, then SRA1Optimized will be the optimal algorithm. For non-commutative noise, EM and EulerHeun will be the most accurate (for Ito and Stratonovich interpretations respectively)."
},

{
    "location": "solvers/sde_solve.html#Special-Keyword-Arguments-1",
    "page": "SDE Solvers",
    "title": "Special Keyword Arguments",
    "category": "section",
    "text": "save_noise: Determines whether the values of W are saved whenever the timeseries is saved. Defaults to true.\ndelta: The delta adaptivity parameter for the natural error estimator. For more details, see the publication."
},

{
    "location": "solvers/sde_solve.html#Implemented-Solvers-1",
    "page": "SDE Solvers",
    "title": "Implemented Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#StochasticDiffEq.jl-1",
    "page": "SDE Solvers",
    "title": "StochasticDiffEq.jl",
    "category": "section",
    "text": "Each of the StochasticDiffEq.jl solvers come with a linear interpolation.EM- The Euler-Maruyama method. Strong Order 0.5 in the Ito sense.\nEulerHeun - The Euler-Heun method. Strong Order 0.5 in the Stratonovich sense.\nRKMil - An explicit Runge-Kutta discretization of the strong Order 1.0 (Ito) Milstein method.\nSRA - The strong Order 2.0 methods for additive Ito and Stratonovich SDEs due to Rossler. Default tableau is for SRA1.\nSRI - The strong Order 1.5 methods for diagonal/scalar Ito SDEs due to Rossler. Default tableau is for SRIW1.\nSRIW1 - An optimized version of SRIW1. Strong Order 1.5 for diagonal/scalar Ito SDEs.\nSRA1 - An optimized version of SRIA1. Strong Order 2.0 for additive Ito and Stratonovich SDEs.For SRA and SRI, the following option is allowed:tableau: The tableau for an :SRA or :SRI algorithm. Defaults to SRIW1 or SRA1."
},

{
    "location": "solvers/sde_solve.html#StochasticCompositeAlgorithm-1",
    "page": "SDE Solvers",
    "title": "StochasticCompositeAlgorithm",
    "category": "section",
    "text": "One unique feature of StochasticDiffEq.jl is the StochasticCompositeAlgorithm, which allows you to, with very minimal overhead, design a multimethod which switches between chosen algorithms as needed. The syntax is StochasticCompositeAlgorithm(algtup,choice_function) where algtup is a tuple of StochasticDiffEq.jl algorithms, and choice_function is a function which declares which method to use in the following step. For example, we can design a multimethod which uses EM() but switches to RKMil() whenever dt is too small:choice_function(integrator) = (Int(integrator.dt<0.001) + 1)\nalg_switch = StochasticCompositeAlgorithm((EM(),RKMil()),choice_function)The choice_function takes in an integrator and thus all of the features available in the Integrator Interface can be used in the choice function."
},

{
    "location": "solvers/sde_solve.html#Adaptive-Type:-RSWM-1",
    "page": "SDE Solvers",
    "title": "Adaptive Type: RSWM",
    "category": "section",
    "text": "Algorithms which allow for adaptive timestepping (all except EM and RKMil) can take in an RSWM type which specifies the rejection sampling with memory algorithm used. The constructor is:RSWM(;discard_length=1e-15,\n     adaptivealg::Symbol=:RSwM3)discard_length - Size at which to discard future information in adaptive. Default is 1e-15.\nadaptivealg: The adaptive timestepping algorithm. Default is :RSwm3.For more details, see the publication."
},

{
    "location": "solvers/rode_solve.html#",
    "page": "RODE Solvers",
    "title": "RODE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/rode_solve.html#RODE-Solvers-1",
    "page": "RODE Solvers",
    "title": "RODE Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/rode_solve.html#Recommended-Methods-1",
    "page": "RODE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "Currently, the only implemented method is the RandomEM method in StochasticDiffEq.jl. It is strong order alpha for a alpha-Holder continuous noise process."
},

{
    "location": "solvers/rode_solve.html#Special-Keyword-Arguments-1",
    "page": "RODE Solvers",
    "title": "Special Keyword Arguments",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/rode_solve.html#Implemented-Solvers-1",
    "page": "RODE Solvers",
    "title": "Implemented Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/rode_solve.html#StochasticDiffEq.jl-1",
    "page": "RODE Solvers",
    "title": "StochasticDiffEq.jl",
    "category": "section",
    "text": "Each of the StochasticDiffEq.jl solvers come with a linear interpolation.RandomEM- The Euler-Maruyama method for RODEs. Strong order matching Holder continuity."
},

{
    "location": "solvers/dde_solve.html#",
    "page": "DDE Solvers",
    "title": "DDE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/dde_solve.html#DDE-Solvers-1",
    "page": "DDE Solvers",
    "title": "DDE Solvers",
    "category": "section",
    "text": "solve(prob::AbstractDDEProblem,alg;kwargs)Solves the DDE defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen."
},

{
    "location": "solvers/dde_solve.html#Recommended-Methods-1",
    "page": "DDE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "The recommended method for standard constant lag DDE problems are the MethodOfSteps algorithms. These are constructed from an OrdinaryDiffEq.jl algorithm as follows:MethodOfSteps(alg;constrained=false,\n             picardabstol = nothing,\n             picardreltol = nothing,\n             picardnorm   = nothing,\n             max_picard_iters = 10)where alg is an OrdinaryDiffEq.jl algorithm. Most algorithms will work, though a notable exception are algorithms which use a lazy interpolant (the Verner methods).The standard choice is MethodOfSteps(Tsit5()). This is a highly efficient FSAL 5th order algorithm which should handle most problems. For fast solving at where non-strict error control is needed, choosing BS3() can do well (this is similar to the MATLAB dde23). For algorithms where strict error control is needed, it is recommended that one uses DP8().If the method is having trouble, one may want to adjust the Picard parameters. Decreasing the Picard tolerances and increasing the Picard iterations can help ensure that the steps are correct. If the problem still is not correctly converging, one should lower dtmax. In the worst case scenarios, one may need to set constrained=true which will constrain the method in a manner that forces more stability at the cost of smaller timesteps.There is currently no recommended algorithm for state-dependent delay problems. An algorithm is currently in the works."
},

{
    "location": "solvers/dae_solve.html#",
    "page": "DAE Solvers",
    "title": "DAE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#DAE-Solvers-1",
    "page": "DAE Solvers",
    "title": "DAE Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Recomended-Methods-1",
    "page": "DAE Solvers",
    "title": "Recomended Methods",
    "category": "section",
    "text": "The recommended method for performance is IDA from the Sundials.jl package if you are solving problems with Float64. It's a very well-optimized method, and allows you to have a little bit of control over the linear solver to better tailor it to your problem. A similar algorithm is daskr. Which one is more efficient is problem-dependent.If your problem requires special Julia types like arbitrary precision numbers, then dassl is the method of choice."
},

{
    "location": "solvers/dae_solve.html#Special-Keyword-Arguments-1",
    "page": "DAE Solvers",
    "title": "Special Keyword Arguments",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Implemented-Solvers-1",
    "page": "DAE Solvers",
    "title": "Implemented Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Sundials.jl-1",
    "page": "DAE Solvers",
    "title": "Sundials.jl",
    "category": "section",
    "text": "IDA - This is the IDA method from the Sundials.jl package.Note that the constructors for the Sundials algorithms take an argument:linearsolver - This is the linear solver which is used in the Newton iterations. The choices are:\n:Dense - A dense linear solver\n:Band - A solver specialized for banded Jacobians. If used, you must set the position of the upper and lower non-zero diagonals via jac_upper and jac_lower.\n:Diagonal - This method is specialized for diagonal Jacobians.\nBCG - A Biconjugate gradient method.\nTFQMR - A TFQMR method.Example:IDA() # Newton + Dense solver\nIDA(linear_solver=:Band,jac_upper=3,jac_lower=3) # Banded solver with nonzero diagonals 3 up and 3 down\nIDA(linear_solver=:BCG) # Biconjugate gradient method                                   "
},

{
    "location": "solvers/dae_solve.html#DASKR.jl-1",
    "page": "DAE Solvers",
    "title": "DASKR.jl",
    "category": "section",
    "text": "DASKR.jl is not automatically included by DifferentialEquations.jl. To use this algorithm, you will need to install and use the package:Pkg.add(\"DASKR\")\nusing DASKRdaskr - This is a wrapper for the well-known DASKR algorithm."
},

{
    "location": "solvers/dae_solve.html#DASSL.jl-1",
    "page": "DAE Solvers",
    "title": "DASSL.jl",
    "category": "section",
    "text": "dassl - A native Julia implementation of the DASSL algorithm."
},

{
    "location": "solvers/fempoisson_solve.html#",
    "page": "FEM Poisson Solvers",
    "title": "FEM Poisson Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/fempoisson_solve.html#FEM-Poisson-Solvers-1",
    "page": "FEM Poisson Solvers",
    "title": "FEM Poisson Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/fempoisson_solve.html#Recommended-Methods-1",
    "page": "FEM Poisson Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "The only available method is FEMDiffEqPoisson. This method uses a chosen linear solver from IterativeSolvers.jl for a linear problem or a nonlinear solver from NLsolve.jl for a nonlinear problem."
},

{
    "location": "solvers/fempoisson_solve.html#List-of-Methods-1",
    "page": "FEM Poisson Solvers",
    "title": "List of Methods",
    "category": "section",
    "text": "Factorizations (:LU, :Cholesky, :QR, :SVD)\nConjugate-Gradient (:CG)\n:GMRESExample:sol = solve(prob,FEMDiffEqPoisson(),solver=:CG)"
},

{
    "location": "solvers/femheat_solve.html#",
    "page": "FEM Heat Solvers",
    "title": "FEM Heat Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/femheat_solve.html#FEM-Heat-Solvers-1",
    "page": "FEM Heat Solvers",
    "title": "FEM Heat Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/femheat_solve.html#Recommended-Methods-1",
    "page": "FEM Heat Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "For nonstiff problems it's recommended you use FEMDiffEqHeatEuler, while for stiff problems it's recommended that you use FEMDiffEqHeatSemiImplicitCrankNicholson."
},

{
    "location": "solvers/femheat_solve.html#Avaliable-Methods-1",
    "page": "FEM Heat Solvers",
    "title": "Avaliable Methods",
    "category": "section",
    "text": "FEMDiffEqHeatEuler\nFEMDiffEqHeatImplicitEuler\nFEMDiffEqHeatCrankNicholson\nFEMDiffEqHeatSemiImplicitEuler\nFEMDiffEqHeatSemiImplicitCrankNicholsonAdditionally, for linear solves, one can choose the method by which the linear solve takes place via the method keyword argument.Factorizations (:LU, :Cholesky, :QR, :SVD)\nConjugate-Gradient (:CG)\n:GMRESExample:sol = solve(prob,FEMDiffEqHeatCrankNicholson(),solver=:CG)"
},

{
    "location": "features/performance_overloads.html#",
    "page": "Performance Overloads",
    "title": "Performance Overloads",
    "category": "page",
    "text": ""
},

{
    "location": "features/performance_overloads.html#Performance-Overloads-1",
    "page": "Performance Overloads",
    "title": "Performance Overloads",
    "category": "section",
    "text": "The DiffEq ecosystem provides an extensive interface for declaring extra functions associated with the differential equation's data. In traditional libraries there is usually only one option: the Jacobian. However, we allow for a large array of pre-computed functions to speed up the calculations. This is offered via function overloading (or overloaded types) and allows for these extra features to be offered without cluttering the problem interface."
},

{
    "location": "features/performance_overloads.html#Declaring-Explicit-Jacobians-1",
    "page": "Performance Overloads",
    "title": "Declaring Explicit Jacobians",
    "category": "section",
    "text": "The most standard case, declaring a function for a Jacobian is done by overloading the function f(t,u,du) with an in-place updating function for the Jacobian: f(Val{:jac},t,u,J) where the value type is used for dispatch. For example, take the LotkaVolterra model:function f(t,u,du)\n         du[1] = 2.0 * u[1] - 1.2 * u[1]*u[2]\n         du[2] = -3 * u[2] + u[1]*u[2]\nendTo declare the Jacobian we simply add the dispatch:function f(::Type{Val{:jac}},t,u,J)\n  J[1,1] = p.a - p.b * u[2]\n  J[1,2] = -(p.b) * u[1]\n  J[2,1] = 1 * u[2]\n  J[2,2] = -3 + u[1]\n  nothing\nendNote that this can also be done by generating a call-overloaded type. Indeed, this is what ParameterizedFunctions.jl does, so see its README."
},

{
    "location": "features/performance_overloads.html#Other-Available-Functions-1",
    "page": "Performance Overloads",
    "title": "Other Available Functions",
    "category": "section",
    "text": "The full interface available to the solvers is as follows:f(t,u,du) # Call the function\nf(Val{:analytic},t,u,du) # The analytical solution. Used in testing\nf(t,u,params,du) # Call the function to calculate with parameters params (vector)\nf(Val{:tgrad},t,u,J) # Call the explicit t-gradient function\nf(Val{:a},t,u,2.0,du) # Call the explicit parameter function with a=2.0\nf(Val{:deriv},Val{:a},t,u,2.0,df) # Call the explicit parameter derivative function with a=2.0\nf(Val{:paramjac},t,u,params,J) # Call the explicit parameter Jacobian function\nf(Val{:jac},t,u,J) # Call the explicit Jacobian function\nf(Val{:expjac},t,u,γ,J) # Call the explicit exponential Jacobian function exp(γJ)\nf(Val{:invjac},t,u,iJ) # Call the explicit Inverse Jacobian function\nf(Val{:invW},t,u,γ,iW) # Call the explicit inverse Rosenbrock-W function (M - γJ)^(-1)\nf(Val{:invW_t},t,u,γ,iW) # Call the explicit transformed inverse Rosenbrock-W function (M/γ - J)^(-1)\nf(Val{:hes},t,u,H) # Call the explicit Hessian function\nf(Val{:invhes},t,u,iH) # Call the explicit Inverse Hessian functionOverloads which require parameters should subtype ParameterizedFunction. These are all in-place functions which write into the last variable. See solver documentation specifics to know which optimizations the algorithms can use."
},

{
    "location": "features/performance_overloads.html#Symbolically-Calculating-the-Functions-1",
    "page": "Performance Overloads",
    "title": "Symbolically Calculating the Functions",
    "category": "section",
    "text": "ParameterizedFunctions.jl automatically calculates as many of these functions as possible and generates the overloads using SymEngine. Thus, for best performance with the least work, it is suggested one use ParameterizedFunctions.jl."
},

{
    "location": "features/diffeq_arrays.html#",
    "page": "DiffEq-Specific Array Types",
    "title": "DiffEq-Specific Array Types",
    "category": "page",
    "text": ""
},

{
    "location": "features/diffeq_arrays.html#DiffEq-Specific-Array-Types-1",
    "page": "DiffEq-Specific Array Types",
    "title": "DiffEq-Specific Array Types",
    "category": "section",
    "text": "In many cases, a standard array may not be enough to fully hold the data for a model. Many of the solvers in DifferentialEquations.jl allow you to solve problems on AbstractArray types which allow you to extend the meaning of an array. This page describes some of the AbstractArray types which can be helpful for modeling differential equations problems."
},

{
    "location": "features/diffeq_arrays.html#ArrayPartitions-1",
    "page": "DiffEq-Specific Array Types",
    "title": "ArrayPartitions",
    "category": "section",
    "text": "ArrayPartitions in DiffEq are used for heterogeneous arrays. For example, PartitionedODEProblem solvers use them internally to turn the separate parts into a single array. You can construct an ArrayPartition using RecursiveArrayTools.jl:using RecursiveArrayTools\nA = ArrayPartition(x::AbstractArray...)where is a list of arrays. The resulting A will act like a single array, and its broadcast will be type stable, allowing for it to be used inside of the native Julia DiffEq solvers in an efficient way. This is a good way to generate an array which has different units for different parts, or different amounts of precision."
},

{
    "location": "features/diffeq_arrays.html#Usage-1",
    "page": "DiffEq-Specific Array Types",
    "title": "Usage",
    "category": "section",
    "text": "An ArrayPartition acts like a single array. A[i] indexes through the first array, then the second, etc. all linearly. But A.x is where the arrays are stored. Thus forusing RecursiveArrayTools\nA = ArrayPartition(y,z)We would have A.x[1]==y and A.x[2]==z. Broadcasting like f.(A) is efficient."
},

{
    "location": "features/diffeq_arrays.html#Example:-Dynamics-Equations-1",
    "page": "DiffEq-Specific Array Types",
    "title": "Example: Dynamics Equations",
    "category": "section",
    "text": "In this example we will show using heterogeneous units in dynamics equations. Our arrays will be:using Unitful, RecursiveArrayTools, DiffEqBase, OrdinaryDiffEq\n\nr0 = [1131.340, -2282.343, 6672.423]u\"km\"\nv0 = [-5.64305, 4.30333, 2.42879]u\"km/s\"\nΔt = 86400.0*365u\"s\"\nmu = 398600.4418u\"km^3/s^2\"\nrv0 = ArrayPartition(r0,v0)Here, r0 is the initial positions, and v0 are the initial velocities. rv0 is the ArrayPartition initial condition. We now write our update function in terms of the ArrayPartition:function f(t, y, dy, μ)\n    r = norm(y.x[1])\n    dy.x[1] .= y.x[2]\n    dy.x[2] .= -μ .* y.x[1] / r^3\nendNotice that y.x[1] is the r part of y, and y.x[2] is the v part of y. Using this kind of indexing is type stable, even though the array itself is heterogeneous. Note that one can also use things like 2y or y.+x and the broadcasting will be efficient.Now to solve our equations, we do the same thing as always in DiffEq:prob = ODEProblem((t, y, dy) -> f(t, y, dy, mu), rv0, (0.0u\"s\", Δt))\nsol = solve(prob, Vern8())"
},

{
    "location": "features/diffeq_arrays.html#MultiScaleArrays-1",
    "page": "DiffEq-Specific Array Types",
    "title": "MultiScaleArrays",
    "category": "section",
    "text": "The multi-scale modeling functionality is provided by MultiScaleArrays.jl. It allows for designing a multi-scale model as an extension of an array, which in turn can be directly used in the native Julia solvers of DifferentialEquations.jl.For more information, please see the MultiScaleArrays.jl README."
},

{
    "location": "features/diffeq_arrays.html#DEDataArrays-1",
    "page": "DiffEq-Specific Array Types",
    "title": "DEDataArrays",
    "category": "section",
    "text": "The DEDataArray{T} type allows one to add other \"non-continuous\" variables to an array, which can be useful in many modeling situations involving lots of events. To define an DEDataArray, make a type which subtypes DEDataArray{T} with a field x for the \"array of continuous variables\" for which you would like the differential equation to treat directly. For example:type MyDataArray{T} <: DEDataArray{T}\n    x::Array{T,1}\n    a::T\n    b::Symbol\nendIn this example, our resultant array is a SimType, and its data which is presented to the differential equation solver will be the array x. Any array which the differential equation solver can use is allowed to be made as the field x, including other DEDataArrays. Other than that, you can add whatever fields you please, and let them be whatever type you please. These extra fields are carried along in the differential equation solver that the user can use in their f equation and modify via callbacks."
},

{
    "location": "features/diffeq_arrays.html#Example:-A-Control-Problem-1",
    "page": "DiffEq-Specific Array Types",
    "title": "Example: A Control Problem",
    "category": "section",
    "text": "In this example we will use a DEDataArray to solve a problem where control parameters change at various timepoints. First we will buildtype SimType{T} <: DEDataArray{T}\n    x::Array{T,1}\n    f1::T\nendas our DEDataArray. It has an extra field f1 which we will use as our control variable. Our ODE function will use this field as follows:function f(t,u,du)\n    du[1] = -0.5*u[1] + u.f1\n    du[2] = -0.5*u[2]\nendNow we will setup our control mechanism. It will be a simple setup which uses set timepoints at which we will change f1. At t=5.0 we will want to increase the value of f1, and at t=8.0 we will want to decrease the value of f1. Using the DiscreteCallback interface, we code these conditions as follows:const tstop1 = [5.]\nconst tstop2 = [8.]\n\n\nfunction condition(t,u,integrator)\n  t in tstop1\nend\n\nfunction condition2(t,u,integrator)\n  t in tstop2\nendNow we have to apply an affect when these conditions are reached. When condition is hit (at t=5.0), we will increase f1 to 1.5. When condition2 is reached, we will decrease f1 to -1.5. This is done via the affects:function affect!(integrator)\n  for c in user_cache(integrator)\n    c.f1 = 1.5\n  end\nend\n\nfunction affect2!(integrator)\n  for c in user_cache(integrator)\n    c.f1 = -1.5\n  end\nendNotice that we have to loop through the user_cache array (provided by the integrator interface) to ensure that all internal caches are also updated. With these functions we can build our callbacks:save_positions = (true,true)\n\ncb = DiscreteCallback(condition, affect!, save_positions=save_positions)\n\nsave_positions = (false,true)\n\ncb2 = DiscreteCallback(condition2, affect2!, save_positions=save_positions)\n\ncbs = CallbackSet(cb,cb2)Now we define our initial condition. We will start at [10.0;10.0] with f1=0.0.u0 = SimType([10.0;10.0], 0.0)\nprob = ODEProblem(f,u0,(0.0,10.0))Lastly we solve the problem. Note that we must pass tstop values of 5.0 and 8.0 to ensure the solver hits those timepoints exactly:const tstop = [5.;8.]\nsol = solve(prob,Tsit5(),callback = cbs, tstops=tstop)(Image: data_array_plot)It's clear from the plot how the controls affected the outcome."
},

{
    "location": "features/diffeq_arrays.html#Data-Arrays-vs-ParameterizedFunctions-1",
    "page": "DiffEq-Specific Array Types",
    "title": "Data Arrays vs ParameterizedFunctions",
    "category": "section",
    "text": "The reason for using a DEDataArray is because the solution will then save the control parameters. For example, we can see what the control parameter was at every timepoint by checking:[sol[i].f1 for i in 1:length(sol)]A similar solution can be achieved using a ParameterizedFunction. We could have instead created our function as:function f(t,u,param,du)\n    du[1] = -0.5*u[1] + param\n    du[2] = -0.5*u[2]\nend\npf = ParameterizedFunction(f,0.0)\nu0 = SimType([10.0;10.0], 0.0)\nprob = ODEProblem(f,u0,(0.0,10.0))\nconst tstop = [5.;8.]\nsol = solve(prob,Tsit5(),callback = cbs, tstops=tstop)where we now change the callbacks to changing the parameter in the function:function affect!(integrator)\n  integrator.f.params = 1.5\nend\n\nfunction affect2!(integrator)\n  integrator.f.params = -1.5\nendThis will also solve the equation and get a similar result. It will also be slightly faster in some cases. However, if the equation is solved in this manner, there will be no record of what the parameter was at each timepoint. That is the tradeoff between DEDataArrays and ParameterizedFunctions."
},

{
    "location": "features/noise_process.html#",
    "page": "Noise Processes",
    "title": "Noise Processes",
    "category": "page",
    "text": ""
},

{
    "location": "features/noise_process.html#Noise-Processes-1",
    "page": "Noise Processes",
    "title": "Noise Processes",
    "category": "section",
    "text": "Noise processes are essential in continuous stochastic modeling. The NoiseProcess types are distributionally-exact, meaning they are not solutions of stochastic differential equations and instead are directly generated according to their analytical distributions. These processes are used as the noise term in the SDE and RODE solvers. Additionally, the noise processes themselves can be simulated and solved using the DiffEq common interface (including the Monte Carlo interface).This page first describes how to use noise processes in SDEs, and analyze/simulate them directly noise processes. Then it describes the standard noise processes which are available. Processes like WienerProcess, CorrelatedWienerProcess, GeometricBrownianMotionProcess, BrownianBridgeProcess and OrnsteinUhlenbeckProcess are pre-defined. Then it is shown how one can define the distributions for a new NoiseProcess.In addition to the NoiseProcess type, more general AbstractNoiseProcesses are defined. The NoiseGrid allows you to define a noise process from a set of pre-calculated points (the \"normal\" way). The NoiseApproximation allows you to define a new noise process as the solution to some stochastic differential equation. While these methods are only approximate, they are more general and allow the user to easily define their own colored noise to use in simulations.The NoiseWrapper allows one to wrap a NoiseProcess from a previous simulation to re-use it in a new simulation in a way that follows the same stochastic trajectory (even if different points are hit, for example solving with a smaller dt) in a distributionally-exact manner. It is demonstrated how the NoiseWrapper can be used to wrap the NoiseProcess of one SDE/RODE solution in order to re-use the same noise process in another simulation.Lastly, the NoiseFunction allows you to use any function of time as the noise process. Together, this functionality allows you to define any colored noise process and use this efficiently and accurately in your simulations."
},

{
    "location": "features/noise_process.html#Using-Noise-Processes-1",
    "page": "Noise Processes",
    "title": "Using Noise Processes",
    "category": "section",
    "text": ""
},

{
    "location": "features/noise_process.html#Passing-a-Noise-Process-to-a-Problem-Type-1",
    "page": "Noise Processes",
    "title": "Passing a Noise Process to a Problem Type",
    "category": "section",
    "text": "AbstractNoiseProcesses can be passed directly to the problem types to replace the standard Wiener process (Brownian motion) with your choice of noise. To do this, simply construct the noise and pass it to the noise keyword argument:μ = 1.0\nσ = 2.0\nW = GeometricBrownianMotionProcess(μ,σ,0.0,1.0,1.0)\n# ...\n# Define f,g,u0,tspan for a SDEProblem\n# ...\nprob = SDEProblem(f,g,u0,tspan,noise=W)"
},

{
    "location": "features/noise_process.html#Basic-Interface-1",
    "page": "Noise Processes",
    "title": "Basic Interface",
    "category": "section",
    "text": "The NoiseProcess acts like a DiffEq solution. For some noise process W, you can get its ith timepoint like W[i] and the associated time W.t[i]. If the NoiseProcess has a bridging distribution defined, it can be interpolated to arbitrary time points using W(t). Note that every interpolated value is saved to the NoiseProcess so that way it can stay distributionally correct. A plot recipe is provided which plots the timeseries."
},

{
    "location": "features/noise_process.html#Direct-Simulation-of-the-Noise-Process-1",
    "page": "Noise Processes",
    "title": "Direct Simulation of the Noise Process",
    "category": "section",
    "text": "Since the NoiseProcess types are distribution-exact and do not require the stochastic differential equation solvers, many times one would like to directly simulate trajectories from these proecesses. The NoiseProcess has a NoiseProcessProblem type:NoiseProblem(noise,tspan)for which solve works. For example, we can simulate a distributionally-exact Geometric Brownian Motion solution by:μ = 1.0\nσ = 2.0\nW = GeometricBrownianMotionProcess(μ,σ,0.0,1.0,1.0)\nprob = NoiseProblem(W,(0.0,1.0))\nsol = solve(prob;dt=0.1)solve requires the dt is given, the solution it returns is a NoiseProcess which has stepped through the timespan. Because this follows the common interface, all of the normal functionality works. For example, we can use the Monte Carlo functionality as follows:monte_prob = MonteCarloProblem(prob)\nsol = solve(monte_prob;dt=0.1,num_monte=100)simulates 100 Geometric Brownian Motions."
},

{
    "location": "features/noise_process.html#Direct-Interface-1",
    "page": "Noise Processes",
    "title": "Direct Interface",
    "category": "section",
    "text": "Most of the time, a NoiseProcess is received from the solution of a stochastic or random differential equation, in which case sol.W gives the NoiseProcess and it is already defined along some timeseries. In other cases, NoiseProcess types are directly simulated (see below). However, NoiseProcess types can also be directly acted on. The basic functionality is given by calculate_step! to calculate a future time point, and accept_step! to accept the step. If steps are rejected, the Rejection Sampling with Memory algorithm is applied to keep the solution distributionally exact. This kind of stepping is done via:W = WienerProcess(0.0,1.0,1.0)\ndt = 0.1\nW.dt = dt\nsetup_next_step!(W)\nfor i in 1:10\n  accept_step!(W,dt)\nend"
},

{
    "location": "features/noise_process.html#Noise-Process-Types-1",
    "page": "Noise Processes",
    "title": "Noise Process Types",
    "category": "section",
    "text": "This section describes the available NoiseProcess types."
},

{
    "location": "features/noise_process.html#Wiener-Process-(White-Noise)-1",
    "page": "Noise Processes",
    "title": "Wiener Process (White Noise)",
    "category": "section",
    "text": "The WienerProcess, also known as Gaussian white noise, Brownian motion, or the noise in the Langevin equation, is the stationary process with distribution N(0,t). The constructor is:WienerProcess(t0,W0,Z0=nothing)\nWienerProcess!(t0,W0,Z0=nothing)"
},

{
    "location": "features/noise_process.html#Correlated-Noise-1",
    "page": "Noise Processes",
    "title": "Correlated Noise",
    "category": "section",
    "text": "One can define a CorrelatedWienerProcess which is a Wiener process with correlations between the Wiener processes. The constructor is:CorrelatedWienerProcess(Γ,t0,W0,Z0=nothing)\nCorrelatedWienerProcess!(Γ,t0,W0,Z0=nothing)where Γ is the constant covariance matrix."
},

{
    "location": "features/noise_process.html#Geometric-Brownian-Motion-1",
    "page": "Noise Processes",
    "title": "Geometric Brownian Motion",
    "category": "section",
    "text": "A GeometricBrownianMotion process is a Wiener process with constant drift μ and constant diffusion σ. I.e. this is the solution of the stochastic differential equationdX_t = mu X_t dt + sigma X_t dW_tThe GeometricBrownianMotionProcess is distribution exact (meaning, not a numerical solution of the stochastic differential equation, and instead follows the exact distribution properties). It can be back interpolated exactly as well. The constructor is:GeometricBrownianMotionProcess(μ,σ,t0,W0,Z0=nothing)\nGeometricBrownianMotionProcess!(μ,σ,t0,W0,Z0=nothing)"
},

{
    "location": "features/noise_process.html#Brownian-Bridge-1",
    "page": "Noise Processes",
    "title": "Brownian Bridge",
    "category": "section",
    "text": "A BrownianBridge process is a Wiener process with a pre-defined start and end value. This process is distribution exact and back be back interpolated exactly as well. The constructor is:BrownianBridge(t0,tend,W0,Wend,Z0=nothing,Zend=nothing)\nBrownianBridge!(t0,tend,W0,Wend,Z0=nothing,Zend=nothing)where W(t0)=W₀, W(tend)=Wend, and likewise for the Z process if defined."
},

{
    "location": "features/noise_process.html#Ornstein-Uhlenbeck-1",
    "page": "Noise Processes",
    "title": "Ornstein-Uhlenbeck",
    "category": "section",
    "text": "One can define a Ornstein-Uhlenbeck process which is a Wiener process defined by the stochastic differential equationdX_t = theta (mu - X_t) dt + sigma X_t dW_tThe OrnsteinUhlenbeckProcess is distribution exact (meaning, not a numerical solution of the stochastic differential equation, and instead follows the exact distribution properties). The constructor is:OrnsteinUhlenbeckProcess(Θ,μ,σ,t0,W0,Z0=nothing)\nOrnsteinUhlenbeckProcess!(Θ,μ,σ,t0,W0,Z0=nothing)"
},

{
    "location": "features/noise_process.html#Direct-Construction-of-a-NoiseProcess-1",
    "page": "Noise Processes",
    "title": "Direct Construction of a NoiseProcess",
    "category": "section",
    "text": "A NoiseProcess is a type defined asNoiseProcess(t0,W0,Z0,dist,bridge;\n             iip=DiffEqBase.isinplace(dist,3),\n             rswm = RSWM())t0 is the first timepoint\nW0 is the first value of the process.\nZ0 is the first value of the psudo-process. This is necessary for higher order algorithms. If it's not needed, set to nothing.\ndist the distribution for the steps over time.\nbridge the bridging distribution. Optional, but required for adaptivity and interpolating at new values.The signature for the dist isdist!(rand_vec,W,dt)for inplace functions, andrand_vec = dist(W,dt)otherwise. The signature for bridge isbridge!(rand_vec,W,W0,Wh,q,h)and the out of place syntax isrand_vec = bridge!(W,W0,Wh,q,h)Here, W is the noise process, W0 is the left side of the current interval, Wh is the right side of the current interval, h is the interval length, and q is the proportion from the left where the interpolation is occuring."
},

{
    "location": "features/noise_process.html#Direct-Construction-Example-1",
    "page": "Noise Processes",
    "title": "Direct Construction Example",
    "category": "section",
    "text": "The easiest way to show how to directly construct a NoiseProcess is by example. Here we will show how to directly construct a NoiseProcess which generates Gaussian white noise.This is the noise process which uses randn!. A special dispatch is added for complex numbers for (randn()+im*randn())/sqrt(2). This function is DiffEqBase.wiener_randn (or with ! respectively).The first function that must be defined is the noise distribution. This is how to generate W(t+dt) given that we know W(x) for xtt. For Gaussian white noise, we know thatW(dt)  N(0dt)for W(0)=0 which defines the stepping distribution. Thus its noise distribution function is:function WHITE_NOISE_DIST(W,dt)\n  if typeof(W.dW) <: AbstractArray\n    return sqrt(abs(dt))*wiener_randn(size(W.dW))\n  else\n    return sqrt(abs(dt))*wiener_randn(typeof(W.dW))\n  end\nendfor the out of place versions, and for the inplace versionsfunction INPLACE_WHITE_NOISE_DIST(rand_vec,W,dt)\n  wiener_randn!(rand_vec)\n  rand_vec .*= sqrt(abs(dt))\nendOptionally, we can provide a bridging distribution. This is the distribution of W(qh) for q01 given that we know W(0)=W and W(h)=W. For Brownian motion, this is known as the Brownian Bridge, and is well known to have the distribution:W(qh)  N(q(W-W)+W(1-q)qh)Thus we have the out-of-place and in-place versions as:function WHITE_NOISE_BRIDGE(W,W0,Wh,q,h)\n  sqrt((1-q)*q*abs(h))*wiener_randn(typeof(W.dW))+q*(Wh-W0)+W0\nend\nfunction INPLACE_WHITE_NOISE_BRIDGE(rand_vec,W,W0,Wh,q,h)\n  wiener_randn!(rand_vec)\n  rand_vec .= sqrt((1.-q).*q.*abs(h)).*rand_vec.+q.*(Wh.-W0).+W0\nendThese functions are then placed in a noise process:NoiseProcess(t0,W0,Z0,WHITE_NOISE_DIST,WHITE_NOISE_BRIDGE,rswm=RSWM())\nNoiseProcess(t0,W0,Z0,INPLACE_WHITE_NOISE_DIST,INPLACE_WHITE_NOISE_BRIDGE,rswm=RSWM())Notice that we can optionally provide an alternative adaptive algorithm for the timestepping rejections. RSWM() defaults to the Rejection Sampling with Memory 3 algorithm (RSwM3).Note that the standard constructors are simply:WienerProcess(t0,W0,Z0=nothing) = NoiseProcess(t0,W0,Z0,WHITE_NOISE_DIST,WHITE_NOISE_BRIDGE,rswm=RSWM())\nWienerProcess!(t0,W0,Z0=nothing) = NoiseProcess(t0,W0,Z0,INPLACE_WHITE_NOISE_DIST,INPLACE_WHITE_NOISE_BRIDGE,rswm=RSWM())These will generate a Wiener process, which can be stepped with step!(W,dt), and interpolated as W(t)."
},

{
    "location": "features/noise_process.html#Non-Standard-Noise-Processes-1",
    "page": "Noise Processes",
    "title": "Non-Standard Noise Processes",
    "category": "section",
    "text": "In addition to the mathematically-defined noise processes above, there exist more generic functionality for building noise processes from other noise processes, from arbitrary functions, from arrays, and from approximations of stochastic differential equations."
},

{
    "location": "features/noise_process.html#NoiseWrapper-1",
    "page": "Noise Processes",
    "title": "NoiseWrapper",
    "category": "section",
    "text": "This produces a new noise process from an old one, which will use its interpolation to generate the noise. This allows you to re-use a previous noise process not just with the same timesteps, but also with new (adaptive) timesteps as well. Thus this is very good for doing Multi-level Monte Carlo schemes and strong convergence testing.To wrap a noise process, simply use:NoiseWrapper(W::NoiseProcess)"
},

{
    "location": "features/noise_process.html#NoiseFunction-1",
    "page": "Noise Processes",
    "title": "NoiseFunction",
    "category": "section",
    "text": "This allows you to use any arbitrary function W(t) as a NoiseProcess. This will use the function lazily, only caching values required to minimize function calls, but not store the entire noise array. This requires an initial time point t0 in the domain of W. A second function is needed if the desired SDE algorithm requires multiple processes.NoiseFunction(t0,W,Z=nothing;noise_prototype=W(t0))Additionally, one can use an in-place function W(out1,out2,t) for more efficient generation of the arrays for multi-dimensional processes. When the in-place version is used without a dispatch for the out-of-place version, the noise_prototype needs to be set."
},

{
    "location": "features/noise_process.html#NoiseGrid-1",
    "page": "Noise Processes",
    "title": "NoiseGrid",
    "category": "section",
    "text": "A noise grid builds a noise process from arrays of points. For example, you can generate your desired noise process as an array W with timepoints t, and use the constructor:NoiseGrid(t,W,Z=nothing)to build the associated noise process. This process comes with a linear interpolation of the given points, and thus the grid does not have to match the grid of integration. Thus this can be used for adaptive solutions as well. However, one must make note that the fidelity of the noise process is linked to how fine the noise grid is determined: if the noise grid is sparse on points compared to the integration, then its distributional properties may be slightly perturbed by the linear interpolation. Thus its suggested that the grid size at least approximately match the number of time steps in the integration to ensure accuracy.For a one-dimensional process, W should be an AbstractVector of Numbers. For multi-dimensional processes, W should be an AbstractVector of the noise_prototype."
},

{
    "location": "features/noise_process.html#NoiseApproximation-1",
    "page": "Noise Processes",
    "title": "NoiseApproximation",
    "category": "section",
    "text": "In many cases, one would like to define a noise process directly by a stochastic differential equation which does not have an analytical solution. Of course, this will not be distributionally-exact and how well the properties match depends on how well the differential equation is integrated, but in many cases this can be used as a good approximation when other methods are much more difficult.A NoiseApproximation is defined by a DEIntegrator. The constructor for a NoiseApproximation is:NoiseApproximation(source1::DEIntegrator,source2::Union{DEIntegrator,Void}=nothing)The DEIntegrator should have a final time point of integration far enough such that it will not halt during the integration. For ease of use, you can use a final time point as Inf. Note that the time points do not have to match the time points of the future integration since the interpolant of the SDE solution will be used. Thus the limiting factor is error tolerance and not hitting specific points."
},

{
    "location": "features/noise_process.html#Examples-Using-Non-Standard-Noise-Processes-1",
    "page": "Noise Processes",
    "title": "Examples Using Non-Standard Noise Processes",
    "category": "section",
    "text": ""
},

{
    "location": "features/noise_process.html#NoiseGrid-2",
    "page": "Noise Processes",
    "title": "NoiseGrid",
    "category": "section",
    "text": "In this example, we will show you how to define your own version of Brownian motion using an array of pre-calculated points. In normal usage you should use WienerProcess instead since this will have distributionally-exact interpolations while the noise grid uses linear interpolations, but this is a nice example of the workflow.To define a NoiseGrid you need to have a set of time points and a set of values for the process. Let's define a Brownian motion on (0.0,1.0) with a dt=0.001. To do this,dt = 0.001\nt = 0:dt:1\nbrownian_values = cumsum([0;[sqrt(dt)*randn() for i in 1:length(t)-1]])Now we build the NoiseGrid using these values:W = NoiseGrid(t,brownian_values)We can then pass W as the noise argument of an SDEProblem to use it in an SDE."
},

{
    "location": "features/noise_process.html#NoiseWrapper-Example-1",
    "page": "Noise Processes",
    "title": "NoiseWrapper Example",
    "category": "section",
    "text": "In this example, we will solve an SDE three times:First to generate a noise process\nSecond with the same timesteps to show the values are the same\nThird with half-sized timstepsFirst we will generate a noise process by solving an SDE:using StochasticDiffEq,  DiffEqBase, DiffEqNoiseProcess\nf1 = (t,u) -> 1.01u\ng1 = (t,u) -> 1.01u\ndt = 1//2^(4)\nprob1 = SDEProblem(f1,g1,1.0,(0.0,1.0))\nsol1 = solve(prob1,EM(),dt=dt)Now we wrap the noise into a NoiseWrapper and solve the same problem:W2 = NoiseWrapper(sol1.W)\nprob1 = SDEProblem(f1,g1,1.0,(0.0,1.0),noise=W2)\nsol2 = solve(prob1,EM(),dt=dt)We can test@test sol1.u ≈ sol2.uto see that the values are essentially equal. Now we can use the same process to solve the same trajectory with a smaller dt:W3 = NoiseWrapper(sol1.W)\nprob2 = SDEProblem(f1,g1,1.0,(0.0,1.0),noise=W3)\n\ndt = 1//2^(5)\nsol3 = solve(prob2,EM(),dt=dt)We can plot the results to see what this looks like:using Plots\nplot(sol1)\nplot!(sol2)\nplot!(sol3)(Image: noise_process)In this plot, sol2 covers up sol1 because they hit essentially the same values. You can see that sol3 its similar to the others, because it's using the same underlying noise process just sampled much finer.To double check, we see that:plot(sol1.W)\nplot!(sol2.W)\nplot!(sol3.W)(Image: coupled_wiener)the coupled Wiener processes coincide at every other time point, and the intermediate timepoints were calculated according to a Brownian bridge."
},

{
    "location": "features/noise_process.html#Adaptive-NoiseWrapper-Example-1",
    "page": "Noise Processes",
    "title": "Adaptive NoiseWrapper Example",
    "category": "section",
    "text": "Here we will show that the same noise can be used with the adaptive methods using the NoiseWrapper. SRI and SRIW1 use slightly different error estimators, and thus give slightly different stepping behavior. We can see how they solve the same 2D SDE differently by using the noise wrapper:prob = SDEProblem(f1,g1,ones(2),(0.0,1.0))\nsol4 = solve(prob,SRI(),abstol=1e-8)\n\nW2 = NoiseWrapper(sol4.W)\nprob2 = SDEProblem(f1,g1,ones(2),(0.0,1.0),noise=W2)\nsol5 = solve(prob2,SRIW1(),abstol=1e-8)\n\nusing Plots\nplot(sol4)\nplot!(sol5)(Image: SRI_SRIW1_diff)"
},

{
    "location": "features/noise_process.html#NoiseApproximation-Example-1",
    "page": "Noise Processes",
    "title": "NoiseApproximation Example",
    "category": "section",
    "text": "In this example we will show how to use the NoiseApproximation in order to build our own Geometric Brownian Motion from its stochastic differential equation definition. In normal usage, you should use the GeometricBrownianMotionProcess instead since that is more efficient and distributionally-exact.First, let's define the SDEProblem. Here will use a timespan (0.0,Inf) so that way the noise can be used over an indefinite integral.const μ = 1.5\nconst σ = 1.2\nf = (t,u) -> μ*u\ng = (t,u) -> σ*u\nprob = SDEProblem(f,g,1.0,(0.0,Inf))Now we build the noise process by building the integrator and sending that integrator to the NoiseApproximation constructor:integrator = init(prob,SRIW1())\nW = NoiseApproximation(integrator)We can use this noise process like any other noise process. For example, we can now build a geometric Brownian motion whose noise process is colored noise that itself is a geometric Brownian motion:prob = SDEProblem(f,g,1.0,(0.0,Inf),noise=W)The possibilities are endless."
},

{
    "location": "features/noise_process.html#NoiseFunction-Example-1",
    "page": "Noise Processes",
    "title": "NoiseFunction Example",
    "category": "section",
    "text": "The NoiseFunction is pretty simple: pass a function. As a silly example, we can use exp as a noise process by doing:f = (t) -> exp(t)\nW = NoiseFunction(0.0,f)If it's multi-dimensional and an in-place function is used, the noise_prototype must be given. For example:f = (out,t) -> (out.=exp(t))\nW = NoiseFunction(0.0,f,noise_prototype=rand(4))This allows you to put arbitrarily weird noise into SDEs and RODEs. Have fun."
},

{
    "location": "features/linear_nonlinear.html#",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Specifying (Non)Linear Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "features/linear_nonlinear.html#Specifying-(Non)Linear-Solvers-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Specifying (Non)Linear Solvers",
    "category": "section",
    "text": "One of the key features of DifferentialEquations.jl is its flexibility. Keeping with this trend, many of the native Julia solvers provided by DifferentialEquations.jl allow you to choose the method for linear and nonlinear solving. This section details how to make that choice."
},

{
    "location": "features/linear_nonlinear.html#Linear-Solvers:-linsolve-Specification-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Linear Solvers: linsolve Specification",
    "category": "section",
    "text": "For differential equation integrators which use linear solvers, an argument to the method linsolve determines the linear solver which is used. The signature is:linsolve!(x,A,b,matrix_updated=false)This is an in-place function which updates x by solving Ax=b. matrix_updated determines whether the matrix A has changed from the last call. This can be used to smartly cache factorizations."
},

{
    "location": "features/linear_nonlinear.html#Basic-linsolve-method:-Factorization-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Basic linsolve method: Factorization",
    "category": "section",
    "text": "The easiest way to specify a linsolve is by a factorization function which generates a type on which \\ (or A_ldiv_B!) is called.  This is done through the helper function LinSolveFactorize which makes the appropriate function. For example, the  Rosenbrock23 takes in a linsolve function, which we can choose to be a  QR-factorization by:Rosenbrock23(linsolve=LinSolveFactorize(qrfact!))LinSolveFactorize takes in a function which returns an object that can \\. Direct methods like qrfact! will automatically cache the factorization, making it efficient for small dense problems.However, for large sparse problems, you can let \\ be an iterative method. For example, using PETSc.jl, we can define our factorization function to be:linsolve = LinSolveFactorize((A) -> KSP(A, ksp_type=\"gmres\", ksp_rtol=1e-6))This function creates a KSP type which makes \\ perform the GMRES iterative method provided by PETSc.jl. Thus if we pass this function into the algorithm as the factorization method, all internal linear solves will happen by PETSc.jl."
},

{
    "location": "features/linear_nonlinear.html#How-LinSolveFactorize-Was-Created-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "How LinSolveFactorize Was Created",
    "category": "section",
    "text": "In order to make your own linsolve functions, let's look at how the LinSolveFactorize function is created. For example, for an LU-Factorization, we would like to use lufact! to do our linear solving. We can directly write this as:function linsolve!(x,A,b,update_matrix=false)\n  _A = lufact!(A)\n  A_ldiv_B!(x,_A,b)\nendThis method works fine and you can pass it to the methods likeRosenbrock23(linsolve=linsolve!)and it will work, but this method does not cache _A, the factorization. This means that, even if A has not changed, it will re-factorize the matrix.To change this, we can instead create a call-overloaded type. The generalized form of this is:type LinSolveFactorize{F}\n  factorization::F\n  A\nend\nLinSolveFactorize(factorization) = LinSolveFactorize(factorization,nothing)\nfunction (p::LinSolveFactorize)(x,A,b,matrix_updated=false)\n  if matrix_updated\n    p.A = p.factorization(A)\n  end\n  A_ldiv_B!(x,p.A,b)\nend\nlinsolve = LinSolveFactorize(lufact!)LinSolveFactorize is a type which holds the factorization method and the pre-factorized matrix. If matrix_updated is true, it will re-compute the factorization. Otherwise it just solves the linear system with the cached factorization. This general idea of using a call-overloaded type can be employed to do many other things."
},

{
    "location": "features/linear_nonlinear.html#Nonlinear-Solvers:-nlsolve-Specification-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Nonlinear Solvers: nlsolve Specification",
    "category": "section",
    "text": "Nonlinear solvers can be chosen via the nlsolve option. An nlsolve function should have two dispatches:nlsolve(Val{init},f,u0_prototype) : Does an initialization phase. Returns a type init_f for later use in the solver. u0_prototype is the expected type for the initial condition u0.\nnlsolve(init_f,u0) : Solves for the root units the initialized f and the initial condition u0. Returns the zeros of the equation."
},

{
    "location": "features/linear_nonlinear.html#Basic-nlsolve-mehtod:-NLSOLVEJL_SETUP-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "Basic nlsolve mehtod: NLSOLVEJL_SETUP",
    "category": "section",
    "text": "By default, a basic nonlinear solver setup is given as NLSOLVEJL_SETUP. For example, the default nlsolve in Trapezoid isTrapezoid(nlsolve=NLSOLVEJL_SETUP())This will use NLsolve.jl with autodifferentiation to solve the nonlinear systems. NLSOLVEJL_SETUP has two options:chunk_size : The autodifferentiation chunk size. Integer. Defaults to ForwardDiff.jl's auto-detection.\nautodiff : Whether to use autodifferentiation. Defaults to true.For example, to turn off autodifferentiation, useTrapezoid(nlsolve=NLSOLVEJL_SETUP(autodiff=false))"
},

{
    "location": "features/linear_nonlinear.html#How-NLSOLVEJL_SETUP-Was-Created-1",
    "page": "Specifying (Non)Linear Solvers",
    "title": "How NLSOLVEJL_SETUP Was Created",
    "category": "section",
    "text": "To create a nonlinear solver, you need to define the two functions. Here we use a call-overloaded type so that way we can hold the chunk size and autodifferentiation information.immutable NLSOLVEJL_SETUP{CS,AD} end\nBase.@pure NLSOLVEJL_SETUP(;chunk_size=0,autodiff=true) = NLSOLVEJL_SETUP{chunk_size,autodiff}()The solver function just calls NLsolve and returns the zeros(p::NLSOLVEJL_SETUP)(f,u0) = (res=NLsolve.nlsolve(f,u0); res.zero)while the initialization function has a different initialization for autodifferentiation or not:function (p::NLSOLVEJL_SETUP{CS,AD}){CS,AD}(::Type{Val{:init}},f,u0_prototype)\n  if AD\n    return non_autodiff_setup(f,u0_prototype)\n  else\n    return autodiff_setup(f,u0_prototype,Val{determine_chunksize(initial_x,CS)})\n  end\nendWe need to declare the get_chunksize trait for the solver:get_chunksize{CS,AD}(x::NLSOLVEJL_SETUP{CS,AD}) = CSThe initialization functions are directly for NLsolve. See the NLsolve.jl docs for the types of inputs it expects to see. This does exactly that:function autodiff_setup{CS}(f!, initial_x::Vector,chunk_size::Type{Val{CS}})\n\n    permf! = (fx, x) -> f!(x, fx)\n\n    fx2 = copy(initial_x)\n    jac_cfg = ForwardDiff.JacobianConfig{CS}(initial_x, initial_x)\n    g! = (x, gx) -> ForwardDiff.jacobian!(gx, permf!, fx2, x, jac_cfg)\n\n    fg! = (x, fx, gx) -> begin\n        jac_res = DiffBase.DiffResult(fx, gx)\n        ForwardDiff.jacobian!(jac_res, permf!, fx2, x, jac_cfg)\n        DiffBase.value(jac_res)\n    end\n\n    return DifferentiableMultivariateFunction(f!, g!, fg!)\nend\n\nfunction non_autodiff_setup(f!, initial_x::Vector)\n  DifferentiableMultivariateFunction(f!)\nend"
},

{
    "location": "features/callback_functions.html#",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "page",
    "text": ""
},

{
    "location": "features/callback_functions.html#Event-Handling-and-Callback-Functions-1",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "section",
    "text": ""
},

{
    "location": "features/callback_functions.html#Introduction-to-Callback-Functions-1",
    "page": "Event Handling and Callback Functions",
    "title": "Introduction to Callback Functions",
    "category": "section",
    "text": "DifferentialEquations.jl allows for using callback functions to inject user code into the solver algorithms. It allows for safely and accurately applying events and discontinuities. Multiple callbacks can be chained together, and these callback types can be used to build libraries of extension behavior."
},

{
    "location": "features/callback_functions.html#The-Callback-Types-1",
    "page": "Event Handling and Callback Functions",
    "title": "The Callback Types",
    "category": "section",
    "text": "The callback types are defined as follows. There are two callback types: the ContinuousCallback and the DiscreteCallback. The ContinuousCallback is applied when a continuous condition function hits zero. This type of callback implements what is known in other problem solving environments as an Event. A DiscreteCallback is applied when its condition function is true."
},

{
    "location": "features/callback_functions.html#ContinuousCallbacks-1",
    "page": "Event Handling and Callback Functions",
    "title": "ContinuousCallbacks",
    "category": "section",
    "text": "ContinuousCallback(condition,affect!;\n                   rootfind = true,\n                   initialize = (c,t,u,integrator) -> nothing,\n                   save_positions = (true,true),\n                   interp_points=10,\n                   abstol=1e-12,reltol=0\n                   idxs=nothing)\n\nContinuousCallback(condition,affect!,affect_neg!;\n                  rootfind = true,\n                  initialize = (c,t,u,integrator) -> nothing,\n                  save_positions = (true,true),\n                  interp_points=10,\n                  abstol=1e-12,reltol=0,\n                  idxs=nothing)The arguments are defined as follows:condition: This is a function condition(t,u,integrator) for declaring when the callback should be used. A callback is initiated if the condition hits 0 within the time interval.\naffect!: This is the function affect!(integrator) where one is allowed to modify the current state of the integrator. This is called when condition is found to be 0 (at a root) and the cross is an upcrossing (from negative to positive). For more information on what can be done, see the Integrator Interface manual page. Modifications to u are safe in this function.\nrootfind: This is a boolean for whether to rootfind the event location. If this is set to true, the solution will be backtracked to the point where condition==0. Otherwise the systems and the affect! will occur at t+dt.\ninterp_points: The number of interpolated points to check the condition. The condition is found by checking whether any interpolation point / endpoint has a different sign. If interp_points=0, then conditions will only be noticed if the sign of condition is different at t than at t+dt. This behavior is not robust when the solution is oscillatory, and thus it's recommended that one use some interpolation points (they're cheap to compute!). 0 within the time interval.\naffect_neg!: This is the function affect_neg!(integrator) where one is allowed to modify the current state of the integrator. This is called when condition is found to be 0 (at a root) and the cross is an downcrossing (from positive to negative). For more information on what can be done, see the Integrator Interface manual page. Modifications to u are safe in this function.\nsave_positions: Boolean tuple for whether to save before and after the affect!. The first save will always occcur (if true), and the second will only occur when an event is detected.  For discontinuous changes like a modification to u to be handled correctly (without error), one should set save_positions=(true,true).\nidxs: The components which will be interpolated into the condition. Defaults to nothing which means u will be all components.\ninitialize: This is a function (c,t,u,integrator) which can be used to initialize the state of the callback c. It should modify the argument c and the return is ignored.Additionally, keyword arguments for abstol and reltol can be used to specify a tolerance from zero for the rootfinder: if the starting condition is less than the tolerance from zero, then no root will be detected. This is to stop repeat events happening just after a previously rootfound event. The default has abstol=1e-14 and reltol=0."
},

{
    "location": "features/callback_functions.html#DiscreteCallback-1",
    "page": "Event Handling and Callback Functions",
    "title": "DiscreteCallback",
    "category": "section",
    "text": "DiscreteCallback(condition,affect!;\n                 save_positions=(true,true),\n                 initialize = (c,t,u,integrator) -> nothing)condition: This is a function condition(t,u,integrator) for declaring when the callback should be used. A callback is initiated if the condition evaluates to true.\naffect!: This is the function affect!(integrator) where one is allowed to modify the current state of the integrator. For more information on what can be done, see the Integrator Interface manual page.\nsave_positions: Boolean tuple for whether to save before and after the affect!. The first save will always occcur (if true), and the second will only occur when an event is detected.  For discontinuous changes like a modification to u to be handled correctly (without error), one should set save_positions=(true,true).\ninitialize: This is a function (c,t,u,integrator) which can be used to initialize the state of the callback c. It should modify the argument c and the return is ignored."
},

{
    "location": "features/callback_functions.html#CallbackSet-1",
    "page": "Event Handling and Callback Functions",
    "title": "CallbackSet",
    "category": "section",
    "text": "Multiple callbacks can be chained together to form a CallbackSet. A CallbackSet is constructed by passing the constructor ContinuousCallback, DiscreteCallback, or other CallbackSet instances:CallbackSet(cb1,cb2,cb3)You can pass as many callbacks as you like. When the solvers encounter multiple callbacks, the following rules apply:ContinuousCallbacks are applied before DiscreteCallbacks. (This is because they often implement event-finding that will backtrack the timestep to smaller than dt).\nFor ContinuousCallbacks, the event times are found by rootfinding and only the first ContinuousCallback affect is applied.\nThe DiscreteCallbacks are then applied in order. Note that the ordering only matters for the conditions: if a previous callback modifies u in such a way that the next callback no longer evaluates condition to true, its affect will not be applied."
},

{
    "location": "features/callback_functions.html#Using-Callbacks-1",
    "page": "Event Handling and Callback Functions",
    "title": "Using Callbacks",
    "category": "section",
    "text": "The callback type is then sent to the solver (or the integrator) via the callback keyword argument:sol = solve(prob,alg,callback=cb)You can supply nothing, a single DiscreteCallback or ContinuousCallback, or a CallbackSet."
},

{
    "location": "features/callback_functions.html#Note-About-Saving-1",
    "page": "Event Handling and Callback Functions",
    "title": "Note About Saving",
    "category": "section",
    "text": "When a callback is supplied, the default saving behavior is turned off. This is because otherwise events would \"double save\" one of the values. To re-enable the standard saving behavior, one must have the first save_positions value be true for at least one callback."
},

{
    "location": "features/callback_functions.html#Modifying-the-Stepping-Within-A-Callback-1",
    "page": "Event Handling and Callback Functions",
    "title": "Modifying the Stepping Within A Callback",
    "category": "section",
    "text": "A common issue with callbacks is that they cause a large discontinuous change, and so it may be wise to pull down dt after such a change. To control the timestepping from a callback, please see the timestepping controls in the integrator interface. Specifically, set_proposed_dt! is used to set the next stepsize, and terminate! can be used to cause the simulation to stop."
},

{
    "location": "features/callback_functions.html#DiscreteCallback-Examples-1",
    "page": "Event Handling and Callback Functions",
    "title": "DiscreteCallback Examples",
    "category": "section",
    "text": ""
},

{
    "location": "features/callback_functions.html#Example-1:-AutoAbstol-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 1: AutoAbstol",
    "category": "section",
    "text": "MATLAB's Simulink has the option for an automatic absolute tolerance. In this example we will implement a callback which will add this behavior to any JuliaDiffEq solver which implments the integrator and callback interface.The algorithm is as follows. The default value is set to start at 1e-6, though we will give the user an option for this choice. Then as the simulation progresses, at each step the absolute tolerance is set to the maximum value that has been reached so far times the relative tolerance. This is the behavior that we will implement in affect!.Since the effect is supposed to occur every timestep, we use the trivial condition:condition = function (t,u,integrator)\n    true\nendwhich always returns true. For our effect we will overload the call on a type. This type will have a value for the current maximum. By doing it this way, we can store the current state for the running maximum. The code is as follows:type AutoAbstolAffect{T}\n  curmax::T\nend\n# Now make `affect!` for this:\nfunction (p::AutoAbstolAffect)(integrator)\n  p.curmax = max(p.curmax,integrator.u)\n  integrator.opts.abstol = p.curmax * integrator.opts.reltol\n  u_modified!(integrator,false)\nendThis makes affect!(integrator) use an internal mutating value curmax to update the absolute tolerance of the integrator as the algorithm states.Lastly, we can wrap it in a nice little constructor:function AutoAbstol(save=true;init_curmax=1e-6)\n  affect! = AutoAbstolAffect(init_curmax)\n  condtion = (t,u,integrator) -> true\n  save_positions = (save,false)\n  DiscreteCallback(condtion,affect!,save_positions=save_positions)\nendThis creates the DiscreteCallback from the affect! and condition functions that we implemented. Nowcb = AutoAbstol(save=true;init_curmax=1e-6)returns the callback that we created. We can then solve an equation using this by simply passing it with the callback keyword argument. Using the integrator interface rather than the solve interface, we can step through one by one to watch the absolute tolerance increase:integrator = init(prob,BS3(),callback=cb)\nat1 = integrator.opts.abstol\nstep!(integrator)\nat2 = integrator.opts.abstol\n@test at1 < at2\nstep!(integrator)\nat3 = integrator.opts.abstol\n@test at2 < at3Note that this example is contained in DiffEqCallbacks.jl, a library of useful callbacks for JuliaDiffEq solvers."
},

{
    "location": "features/callback_functions.html#ContinuousCallback-Examples-1",
    "page": "Event Handling and Callback Functions",
    "title": "ContinuousCallback Examples",
    "category": "section",
    "text": ""
},

{
    "location": "features/callback_functions.html#Example-1:-Bouncing-Ball-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 1: Bouncing Ball",
    "category": "section",
    "text": "Let's look at the bouncing ball. @ode_def from ParameterizedFunctions.jl was to define the problem, where the first variable y is the height which changes by v the velocity, where the velocity is always changing at -g which is the gravitational constant. This is the equation:f = @ode_def_bare BallBounce begin\n  dy =  v\n  dv = -g\nend g=9.81All we have to do in order to specify the event is to have a function which should always be positive with an event occurring at 0. For now at least that's how it's specified. If a generalization is needed we can talk about this (but it needs to be \"root-findable\"). For here it's clear that we just want to check if the ball's height ever hits zero:function condition(t,u,integrator) # Event when event_f(t,u) == 0\n  u[1]\nendNotice that here we used the values u instead of the value from the integrator. This is because the values t,u will be appropriately modified at the interpolation points, allowing for the rootfinding behavior to occur.Now we have to say what to do when the event occurs. In this case we just flip the velocity (the second variable)function affect!(integrator)\n  integrator.u[2] = -integrator.u[2]\nendThe callback is thus specified by:cb = ContinuousCallback(condition,affect!)Then you can solve and plot:u0 = [50.0,0.0]\ntspan = (0.0,15.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb)\nplot(sol)(Image: BallBounce)As you can see from the resulting image, DifferentialEquations.jl is smart enough to use the interpolation to hone in on the time of the event and apply the event back at the correct time. Thus one does not have to worry about the adaptive timestepping \"overshooting\" the event as this is handled for you. Notice that the event macro will save the value(s) at the discontinuity."
},

{
    "location": "features/callback_functions.html#Tweaking-the-Defaults-to-Specialized-Event-Detection-To-Your-Problem-1",
    "page": "Event Handling and Callback Functions",
    "title": "Tweaking the Defaults to Specialized Event Detection To Your Problem",
    "category": "section",
    "text": "Event detection is by nature a difficult issue due to floating point problems. The defaults given by DifferentialEquations.jl works pretty well for most problems where events are well-spaced, but if the events are close to each other (relative to the stepsize), the defaults may need to be tweaked.The bouncing ball is a good example of this behavior. Let's see what happens if we change the timespan to be very long:u0 = [50.0,0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb)\nplot(sol,plotdensity=10000)(Image: ball_miss)To see why the event was missed, let's see the timesteps:println(sol.t)\n# [0.0,0.000101935,0.00112128,0.0113148,0.11325,1.1326,3.19275,3.19275,100.0]The last timestep was huge! The reason why this happened is because the bouncing ball's solution between discontinuities is only quadratic, and thus a second order method (Tsit5()) can integrate it exactly. This means that the error is essentially zero, and so it will grow dt by qmax every step (for almost all problems this is not an issue that will come up, but it makes this into a good test example).One way we can help with event detection is by giving a reasonable limit to the timestep. By default it will allow stepping the size of the whole interval. Let's capt it at 10:u0 = [50.0,0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb,dtmax=10)\nplot(sol,plotdensity=10000)(Image: bounce_long)If we don't want to constrain the timestep, we can instead change the interp_points. interp_points is the number of interpolation points used to check for an event. By default it is 10. Here's a little illustration of what's going on when the timestep is unconstrained. To check if there's an event in [3.1925,100.0], it will check if the sign is different at any timepoint in linspace(3.1925,100.0,interp_points) using an interpolation (cheap, low cost, not function evaluation). Because 3.1925 was a previous event (and thus too close to zero, as seen by the callback's abstol and reltol), it will ignore the sign there (in order to prevent repeat events) and thus check if the sign changes on [13.94,100.0] where 13.94 is the first point in the linspace. However, the ball has already gone negative by this point, and thus there is no sign change which means it cannot detect the event.This is why, in most cases, increasing the interp_points will help with event detection (another case where this will show up is if the problem is highly oscillatory and you need to detect events inside the interval). Thus we can solve the problem without constraining the timestep by:cb = ContinuousCallback(condition,affect!,interp_points=100000)\nu0 = [50.0,0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb)\nplot(sol,plotdensity=10000)Note that the interp_points only has to be that high because the problem is odd in a way that causes large timesteps. Decreasing the interp_points a bit shows another issue that can occur:cb = ContinuousCallback(condition,affect!,interp_points=1000)\nu0 = [50.0,0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb)\nplot(sol,plotdensity=10000)In this case there are many events, and it steps working at around t=54.2768:println(sol.t)\n# [0.0,0.000101935,0.00112128,0.0113148,0.11325,1.1326,3.19275,3.19275,9.57826,9.57826,15.9638,15.9638,22.3493,22.3493,28.7348,28.7348,35.1203,35.1203,41.5058,41.5058,47.8913,47.8913,54.2768,54.2768,54.2768,54.2768,100.0]The reason because of a repeat event at t=54.2768. Not that every time an event occurs, there are by default two saves (as denoted by the save_positions keyword argument), and so the four repeat of this timepoint denotes a double event. We can see why this occurred by printing out the value:println(sol[24])\n# [-1.50171e-12,31.3209]This value is not exactly zero due to floating point errors, and \"the faster\" the changes the larger this error (this is one reason for using higher precision numbers when necessary). Recall that by default, the abstol for an event is 1e-12, and so this does not recognize t=54.2768 as being a zero, and instead sees it as a negative timepoint. Thus since it's position just soon after, it will see there's a negative -> positive event, flipping the sign once more, and then continuing to fall below the ground.To fix this, we can increase the tolerance a bit. For this problem, we can safely say that anything below 1e-10 can be considered zero. Thus we modify the callback:cb = ContinuousCallback(condition,affect!,interp_points=1000,abstol=1e-10)\nu0 = [50.0,0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),callback=cb)\nplot(sol,plotdensity=10000)and it once again detects properly.The short of it is: the defaults may need to be tweaked for your given problem, and usually the answer is increasing the number of interpolation points, or if you are noticing multi-events at a single timepoint, changing the tolerances. If these fail, constraining the timestep is another option. For most problems the defaults should be fine, but these steps will be necessary for \"fast\" problems or highly oscillatory problems."
},

{
    "location": "features/callback_functions.html#Example-2:-Growing-Cell-Population-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 2: Growing Cell Population",
    "category": "section",
    "text": "Another interesting issue is with models of changing sizes. The ability to handle such events is a unique feature of DifferentialEquations.jl! The problem we would like to tackle here is a cell population. We start with 1 cell with a protein X which increases linearly with time with rate parameter α. Since we are going to be changing the size of the population, we write the model in the general form:const α = 0.3\nf = function (t,u,du)\n  for i in 1:length(u)\n    du[i] = α*u[i]\n  end\nendOur model is that, whenever the protein X gets to a concentration of 1, it triggers a cell division. So we check to see if any concentrations hit 1:function condition(t,u,integrator) # Event when event_f(t,u) == 0\n  1-maximum(u)\nendAgain, recall that this function finds events as when condition==0, so 1-maximum(u) is positive until a cell has a concentration of X which is 1, which then triggers the event. At the event, we have that the cell splits into two cells, giving a random amount of protein to each one. We can do this by resizing the cache (adding 1 to the length of all of the caches) and setting the values of these two cells at the time of the event:affect! = function (integrator)\n  u = integrator.u\n  resize!(integrator,length(u)+1)\n  maxidx = findmax(u)[2]\n  Θ = rand()\n  u[maxidx] = Θ\n  u[end] = 1-Θ\n  nothing\nendAs noted in the Integrator Interface, resize!(integrator,length(integrator.u)+1) is used to change the length of all of the internal caches (which includes u) to be their current length + 1, growing the ODE system. Then the following code sets the new protein concentrations. Now we can solve:callback = ContinuousCallback(condition,affect!)\nu0 = [0.2]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,callback=callback)The plot recipes do not have a way of handling the changing size, but we can plot from the solution object directly. For example, let's make a plot of how many cells there are at each time. Since these are discrete values, we calculate and plot them directly:plot(sol.t,map((x)->length(x),sol[:]),lw=3,\n     ylabel=\"Number of Cells\",xlabel=\"Time\")(Image: NumberOfCells)Now let's check-in on a cell. We can still use the interpolation to get a nice plot of the concentration of cell 1 over time. This is done with the command:ts = linspace(0,10,100)\nplot(ts,map((x)->x[1],sol.(ts)),lw=3,\n     ylabel=\"Amount of X in Cell 1\",xlabel=\"Time\")(Image: Cell1)Notice that every time it hits 1 the cell divides, giving cell 1 a random amount of X which then grows until the next division.Note that one macro which was not shown in this example is deleteat! on the caches. For example, to delete the second cell, we could use:deleteat!(integrator,2)This allows you to build sophisticated models of populations with births and deaths."
},

{
    "location": "features/callback_library.html#",
    "page": "Callback Library",
    "title": "Callback Library",
    "category": "page",
    "text": ""
},

{
    "location": "features/callback_library.html#Callback-Library-1",
    "page": "Callback Library",
    "title": "Callback Library",
    "category": "section",
    "text": "DiffEqCallbackLibrary.jl provides a library of various helpful callbacks which can be used with any component solver which implements the callback interface. It adds the following callbacks which are available to users of DifferentialEquations.jl."
},

{
    "location": "features/callback_library.html#Callbacks-1",
    "page": "Callback Library",
    "title": "Callbacks",
    "category": "section",
    "text": ""
},

{
    "location": "features/callback_library.html#Manifold-Conservation-and-Projection-1",
    "page": "Callback Library",
    "title": "Manifold Conservation and Projection",
    "category": "section",
    "text": "In many cases, you may want to declare a manifold on which a solution lives. Mathematically, a manifold M is defined by a function g as the set of points where g(u)=0. An embedded manifold can be a lower dimensional object which constrains the solution. For example, g(u)=E(u)-C where E is the energy of the system in state u, meaning that the energy must be constant (energy preservation). Thus by defining the manifold the solution should live on, you can retain desired properties of the solution.It is a consequence of convergence proofs both in the deterministic and stochastic cases that post-step projection to manifolds keep the same convergence rate (stochastic requires a truncation in the proof, details details), thus any algorithm can be easily extended to conserve properties. If the solution is supposed to live on a specific manifold or conserve such property, this guarantees the conservation law without modifying the convergence properties."
},

{
    "location": "features/callback_library.html#Constructor-1",
    "page": "Callback Library",
    "title": "Constructor",
    "category": "section",
    "text": "ManifoldProjection(g;nlsolve=NLSOLVEJL_SETUP(),save=true)g: The residual function for the manifold: g(u,resid). This is an inplace function which writes to the residual the difference from the manifold components.\nnlsolve: A nonlinear solver as defined in the nlsolve format\nsave: Whether to do the standard saving (applied after the callback)"
},

{
    "location": "features/callback_library.html#Example-1",
    "page": "Callback Library",
    "title": "Example",
    "category": "section",
    "text": "Here we solve the harmonic oscillator:u0 = ones(2)\nf = function (t,u,du)\n  du[1] = u[2]\n  du[2] = -u[1]\nend\nprob = ODEProblem(f,u0,(0.0,100.0))However, this problem is supposed to conserve energy, and thus we define our manifold to conserve the sum of squares:function g(u,resid)\n  resid[1] = u[2]^2 + u[1]^2 - 2\n  resid[2] = 0\nendTo build the callback, we just callcb = ManifoldProjection(g)Using this callback, the Runge-Kutta method Vern7 conserves energy:sol = solve(prob,Vern7(),callback=cb)\n@test sol[end][1]^2 + sol[end][2]^2 ≈ 2(Image: manifold_projection)"
},

{
    "location": "features/callback_library.html#AutoAbstol-1",
    "page": "Callback Library",
    "title": "AutoAbstol",
    "category": "section",
    "text": "Many problem solving environments such as MATLAB provide a way to automatically adapt the absolute tolerance to the problem. This helps the solvers automatically \"learn\" what appropriate limits are. Via the callback interface, DiffEqCallbacks.jl implements a callback AutoAbstol which has the same behavior as the MATLAB implementation, that is the absolute tolerance starts and at each iteration it is set to the maximum value that the state has thus far reached times the relative tolerance. If init_curmax is zero, then the initial value is determined by the abstol of the solver. Otherwise this is the initial value for the current maximum abstol.To generate the callback, use the constructor:AutoAbstol(save=true;init_curmax=0.0)"
},

{
    "location": "features/monte_carlo.html#",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Parallel Monte Carlo Simulations",
    "category": "page",
    "text": ""
},

{
    "location": "features/monte_carlo.html#Parallel-Monte-Carlo-Simulations-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Parallel Monte Carlo Simulations",
    "category": "section",
    "text": ""
},

{
    "location": "features/monte_carlo.html#Performing-a-Monte-Carlo-Simulation-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Performing a Monte Carlo Simulation",
    "category": "section",
    "text": ""
},

{
    "location": "features/monte_carlo.html#Building-a-Problem-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Building a Problem",
    "category": "section",
    "text": "To perform a Monte Carlo simulation, define a MonteCarloProblem. The constructor is:MonteCarloProblem(prob::DEProblem;\n                  output_func = (sol,i) -> sol,\n                  prob_func= (prob,i)->prob)prob_func: The function by which the problem is to be modified.\noutput_func: The reduction function.One can specify a function prob_func which changes the problem. For example:function prob_func(prob,i)\n  prob.u0 = randn()*prob.u0\n  prob\nendmodifies the initial condition for all of the problems by a standard normal random number (a different random number per simulation). This can be used to perform searches over initial values. Note that the parameter i is a unique counter over the simulations. Thus if you have an array of initial conditions u0_arr, you can have the ith simulation use the ith initial condition via:function prob_func(prob,i)\n  prob.u0 = u0_arr[i]\n  prob\nendIf your function is a ParameterizedFunction, you can do similar modifications to prob.f to perform a parameter search. The output_func is a reduction function. It's arguments are the generated solution and the unique index for the run. For example, if we wish to only save the 2nd coordinate at the end of each solution, we can do:output_func(sol,i) = sol[end,2]Thus the Monte Carlo Simulation would return as its data an array which is the end value of the 2nd dependent variable for each of the runs."
},

{
    "location": "features/monte_carlo.html#Parameterizing-the-Monte-Carlo-Components-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Parameterizing the Monte Carlo Components",
    "category": "section",
    "text": "The Monte Carlo components can be parameterized by using the ConcreteParameterizedFunction constructors.ProbParameterizedFunction(prob_func,params)\nOutputParameterizedFunction(output_func,params)Here, the signatures are prob_func(prob,i,params) and output_func(sol,params). These parameters are added to the parameter list for use in the parameter estimation schemes."
},

{
    "location": "features/monte_carlo.html#Solving-the-Problem-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Solving the Problem",
    "category": "section",
    "text": "sim = solve(prob,alg,kwargs...)The keyword arguments take in the arguments for the common solver interface and will pass them to the differential equation solver. The special keyword arguments to note are:num_monte: The number of simulations to run. Default is 10,000.\nparallel_type : The type of parallelism to employ. Default is :pmap.The types of parallelism included are::none - No parallelism\n:threads - This uses multithreading. It's local (single computer, shared memory) parallelism only. Fastest when the trajectories are quick.\n:parfor - A multiprocessing parallelism. Slightly better than pmap when the calculations are fast. Does not re-distribute work: each trajectory is assumed to take as long to calculate.\n:pmap - The default. Uses pmap internally. It will use as many processors as you have Julia processes. To add more processes, use addprocs(n). See Julia's documentation for more details. Recommended for the case when each trajectory calculation isn't \"too quick\" (at least about a millisecond each?).\n:split_threads - This uses threading on each process, splitting the problem into nprocs() even parts. This is for solving many quick trajectories on a multi-node machine. It's recommended you have one process on each node.Additionally, a MonteCarloEstimator can be suppliedsim = solve(prob,estimator,alg,kwargs...)These will be detailed when implemented."
},

{
    "location": "features/monte_carlo.html#Solution-Type-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Solution Type",
    "category": "section",
    "text": "The resulting type is a MonteCarloSimulation, which includes the array of solutions. If the problem was a TestProblem, summary statistics on the errors are returned as well."
},

{
    "location": "features/monte_carlo.html#Plot-Recipe-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Plot Recipe",
    "category": "section",
    "text": "There is a plot recipe for a AbstractMonteCarloSimulation which composes all of the plot recipes for the component solutions. The keyword arguments are passed along. A useful argument to use is linealpha which will change the transparency of the plots. An additional argument is idxs which allows you to choose which components of the solution to plot. For example, if the differential equation is a vector of 9 values, idxs=1:2:9 will plot only the Monte Carlo solutions of the odd components."
},

{
    "location": "features/monte_carlo.html#Example-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Example",
    "category": "section",
    "text": "Let's test the sensitivity of the linear ODE to its initial condition.addprocs(4)\nusing DiffEqMonteCarlo, DiffEqBase, DiffEqProblemLibrary, OrdinaryDiffEq\nprob = prob_ode_linear\nprob_func = function (prob)\n  prob.u0 = rand()*prob.u0\n  prob\nend\nmonte_prob = MonteCarloProblem(prob,prob_func=prob_func)\nsim = solve(monte_prob,Tsit5(),num_monte=100)\n\nusing Plots\nplotly()\nplot(sim,linealpha=0.4)Here we solve the same ODE 100 times on 4 different cores, jiggling the initial condition by rand(). The resulting plot is as follows:(Image: monte_carlo_plot)"
},

{
    "location": "features/monte_carlo.html#Analyzing-a-Monte-Carlo-Experiment-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Analyzing a Monte Carlo Experiment",
    "category": "section",
    "text": "Analysis tools are included for generating summary statistics and summary plots for a MonteCarloSimulation."
},

{
    "location": "features/monte_carlo.html#Time-steps-vs-time-points-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Time steps vs time points",
    "category": "section",
    "text": "For the summary statistics, there are two types. You can either summarize by time steps or by time points. Summarizing by time steps assumes that the time steps are all the same time point, i.e. the integrator used a fixed dt or the values were saved using saveat. Summarizing by time points requires interpolating the solution."
},

{
    "location": "features/monte_carlo.html#Analysis-at-a-time-step-or-time-point-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Analysis at a time step or time point",
    "category": "section",
    "text": "get_timestep(sim,i) # Returns an iterator of each simulation at time step i\nget_timepoint(sim,t) # Returns an iterator of each simulation at time point t\ncomponentwise_vectors_timestep(sim,i) # Returns a vector of each simulation at time step i\ncomponentwise_vectors_timepoint(sim,t) # Returns a vector of each simulation at time point t"
},

{
    "location": "features/monte_carlo.html#Summary-Statistics-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Summary Statistics",
    "category": "section",
    "text": ""
},

{
    "location": "features/monte_carlo.html#Single-Time-Statistics-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Single Time Statistics",
    "category": "section",
    "text": "The available functions for time steps are:timestep_mean(sim,i) # Computes the mean of each component at time step i\ntimestep_median(sim,i) # Computes the median of each component at time step i\ntimestep_quantile(sim,q,i) # Computes the quantile q of each component at time step i\ntimestep_meanvar(sim,i)  # Computes the mean and variance of each component at time step i\ntimestep_meancov(sim,i,j) # Computes the mean at i and j, and the covariance, for each component\ntimestep_meancor(sim,i,j) # Computes the mean at i and j, and the correlation, for each component\ntimestep_weighted_meancov(sim,W,i,j) # Computes the mean at i and j, and the weighted covariance W, for each componentThe available functions for time points are:timepoint_mean(sim,t) # Computes the mean of each component at time t\ntimepoint_median(sim,t) # Computes the median of each component at time t\ntimepoint_quantile(sim,q,t) # Computes the quantile q of each component at time t\ntimepoint_meanvar(sim,t) # Computes the mean and variance of each component at time t\ntimepoint_meancov(sim,t1,t2) # Computes the mean at t1 and t2, the covariance, for each component\ntimepoint_meancor(sim,t1,t2) # Computes the mean at t1 and t2, the correlation, for each component\ntimepoint_weighted_meancov(sim,W,t1,t2) # Computes the mean at t1 and t2, the weighted covariance W, for each component"
},

{
    "location": "features/monte_carlo.html#Full-Timeseries-Statistics-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Full Timeseries Statistics",
    "category": "section",
    "text": "Additionally, the following functions are provided for analyzing the full timeseries. The mean and meanvar versions return a DiffEqArray which can be directly plotted. The meancov and meancor return a matrix of tuples, where the tuples are the (mean_t1,mean_t2,cov or cor).The available functions for the time steps are:timeseries_steps_mean(sim) # Computes the mean at each time step\ntimeseries_steps_median(sim) # Computes the median at each time step\ntimeseries_steps_quantile(sim,q) # Computes the quantile q at each time step\ntimeseries_steps_meanvar(sim) # Computes the mean and variance at each time step\ntimeseries_steps_meancov(sim) # Computes the covariance matrix and means at each time step\ntimeseries_steps_meancor(sim) # Computes the correlation matrix and means at each time step\ntimeseries_steps_weighted_meancov(sim) # Computes the weighted covariance matrix and means at each time stepThe available functions for the time points are:timeseries_point_mean(sim,ts) # Computes the mean at each time point in ts\ntimeseries_point_median(sim,ts) # Computes the median at each time point in ts\ntimeseries_point_quantile(sim,q,ts) # Computes the quantile q at each time point in ts\ntimeseries_point_meanvar(sim,ts) # Computes the mean and variance at each time point in ts\ntimeseries_point_meancov(sim,ts) # Computes the covariance matrix and means at each time point in ts\ntimeseries_point_meancor(sim,ts) # Computes the correlation matrix and means at each time point in ts\ntimeseries_point_weighted_meancov(sim,ts) # Computes the weighted covariance matrix and means at each time point in ts"
},

{
    "location": "features/monte_carlo.html#MonteCarloSummary-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "MonteCarloSummary",
    "category": "section",
    "text": "The MonteCarloSummary type is included to help with analyzing the general summary statistics. Two constructors are provided:MonteCarloSummary(sim)\nMonteCarloSummary(sim,ts)The first produces a (mean,var) summary at each time step. As with the summary statistics, this assumes that the time steps are all the same. The second produces a (mean,var) summary at each time point t in ts. This requires the ability to interpolate the solution."
},

{
    "location": "features/monte_carlo.html#Plot-Recipe-2",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Plot Recipe",
    "category": "section",
    "text": "The MonteCarloSummary comes with a plot recipe for visualizing the summary statistics. The extra keyword arguments are:idxs: the solution components to plot. Defaults to plotting all components.\nerror_style: The style for plotting the error. Defaults to ribbon. Other choices are :bars for error bars and :none for no error bars.One useful argument is fillalpha which controls the transparency of the ribbon around the mean. The confidence interval is the Gaussian CI 1.96*var."
},

{
    "location": "features/monte_carlo.html#Example-Analysis-1",
    "page": "Parallel Monte Carlo Simulations",
    "title": "Example Analysis",
    "category": "section",
    "text": "In this example we will show how to analyze a MonteCarloSolution. First, let's generate a 10 solution Monte Carlo experiment:prob = prob_sde_2Dlinear\nprob2 = MonteCarloProblem(prob)\nsim = solve(prob2,SRIW1(),dt=1//2^(3),num_monte=10,adaptive=false)The system, prob_sde_2Dlinear, is a (4,2) system of stochastic differential equations which we solved 10 times. We can compute the mean and the variance at the 3rd timestep using:m,v = timestep_meanvar(sim,3)or we can compute the mean and the variance at the t=0.5 using:m,v = timepoint_meanvar(sim,0.5)We can get a series for the mean and the variance at each time step using:m_series,v_series = timeseries_steps_meanvar(sim)or at chosen values of t:ts = 0:0.1:1\nm_series = timeseries_point_mean(sim,ts)Note that these mean and variance series can be directly plotted. We can compute covariance matrices similarly:timeseries_steps_meancov(sim) # Use the time steps, assume fixed dt\ntimeseries_point_meancov(sim,0:1//2^(3):1,0:1//2^(3):1) # Use time points, interpolateFor general analysis, we can build a MonteCarloSummary type.summ = MonteCarloSummary(sim)will summarize at each time step, whilesumm = MonteCarloSummary(sim,0.0:0.1:1.0)will summarize at the 0.1 time points using the interpolations. To visualize the results we can plot it. Since there are 8 components to the differential equation, this can get messy, so let's only plot the 3rd component:plot(summ;idxs=3)(Image: monte_ribbon)We can change to errorbars instead of ribbons and plot two different indices:plot(summ;idxs=(3,5),error_style=:bars)(Image: monte_bars)Or we can simply plot the mean of every component over time:plot(summ;error_style=:none)(Image: monte_means)"
},

{
    "location": "features/low_dep.html#",
    "page": "Low Dependency Usage",
    "title": "Low Dependency Usage",
    "category": "page",
    "text": ""
},

{
    "location": "features/low_dep.html#Low-Dependency-Usage-1",
    "page": "Low Dependency Usage",
    "title": "Low Dependency Usage",
    "category": "section",
    "text": "DifferentialEquations.jl is a large library containing the functionality of many different solver and addon packages. However in many cases you may want to cut down on the size of the dependency and only use the parts of the the library which are essential to your application. This is possible due to JuliaDiffEq's modular package structure."
},

{
    "location": "features/low_dep.html#Common-Example:-Using-only-OrdinaryDiffEq.jl-1",
    "page": "Low Dependency Usage",
    "title": "Common Example: Using only OrdinaryDiffEq.jl",
    "category": "section",
    "text": "One common example is using only the ODE solvers OrdinaryDiffEq.jl. In this case you will need a dependency on both DiffEqBase.jl (which holds the problem and solution types) and OrdinaryDiffEq.jl. Thus replacingusing DifferentialEquationswithusing OrdinaryDiffEq, DiffEqBasewill work if these are the only features you are using."
},

{
    "location": "features/low_dep.html#Generalizing-the-Idea-1",
    "page": "Low Dependency Usage",
    "title": "Generalizing the Idea",
    "category": "section",
    "text": "In general, you will always need DiffEqBase.jl, since it defines all of the fundamental types. For solvers, you typically only need that solver package. So DiffEqBase+Sundials, DiffEqBase+LSODA, etc. will get you the common interface with that specific solver setup. DiffEqBase.jl is a very lightweight dependency, so there is no issue here! For PDEs, you normally need DiffEqBase+DiffEqPDEBase in addition to the solver package.For the addon packages, you will normally need DiffEqBase, the solver package you choose, and the addon package. So for example, for parameter estimation you would likely want DiffEqBase+OrdinaryDiffEq+DiffEqParamEstim. If you arne't sure which package a specific command is from, they using @which. For example, from the parameter estimation docs we have:using DifferentialEquations\nf = @ode_def_nohes LotkaVolterraTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=1.0 c=3.0 d=1.0\n\nu0 = [1.0;1.0]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5())\nt = collect(linspace(0,10,200))\nrandomized = [(sol(t[i]) + .01randn(2)) for i in 1:length(t)]\nusing RecursiveArrayTools\ndata = vecvec_to_mat(randomized)\ncost_function = build_loss_objective(prob,t,data,Tsit5(),maxiters=10000)If we wanted to know where build_loss_objective came from, we can do:@which build_loss_objective(prob,t,data,Tsit5(),maxiters=10000)\n\n(::DiffEqParamEstim.#kw##build_loss_objective)(::Array{Any,1}, ::DiffEqParamEstim.#build_loss_objective, prob::DiffEqBase.DEProblem, t, data, alg)This says it's in the DiffEqParamEstim.jl package. Thus in this case, we could have doneusing DiffEqBase, OrdinaryDiffEq, DiffEqParamEstiminstead of the full using DifferentialEquations. Note that due to the way Julia dependencies work, any internal function in the package will work. The only dependencies you need to explicitly using are the functions you are specifically calling. Thus this method can be used to determine all of the DiffEq packages you are using."
},

{
    "location": "features/mesh.html#",
    "page": "Meshes",
    "title": "Meshes",
    "category": "page",
    "text": ""
},

{
    "location": "features/mesh.html#Meshes-1",
    "page": "Meshes",
    "title": "Meshes",
    "category": "section",
    "text": ""
},

{
    "location": "features/mesh.html#Mesh-Specification-1",
    "page": "Meshes",
    "title": "Mesh Specification",
    "category": "section",
    "text": "Finite element meshes are specified in the (node,elem) structure due to Long Chen. For the standard elements used in this package, we describe a geometric figure by a triangulation. The nodes are the vertices of the triangle and the elements are the triangles themselves. These are encoded as follows:Row i of node is an (xy) (or (xyz)) pair which specifies the coordinates of the ith node.\nRow j of elem are the indices of the nodes which make the triangle. Thus in 2D each row has three numbers.For example, to know the (xy) locations of the vertices of triangle j, we would see that node[elem[j,i],:] are the (xy) locations of the ith vertex for i=123.For more information, please see Programming of Finite Element Methods by Long Chen."
},

{
    "location": "features/mesh.html#DiffEqPDEBase.findboundary",
    "page": "Meshes",
    "title": "DiffEqPDEBase.findboundary",
    "category": "Function",
    "text": "findboundary(elem,bdflag=[])`\n\nfindboundary(fem_mesh::FEMMesh,bdflag=[])\n\nFinds elements which are on the boundary of the domain. If bdflag is given, then those indices are added as nodes for a dirichlet boundary condition (useful for creating cracks and other cutouts of domains).\n\nReturns\n\nbdnode = Vector of indices for bdnode. Using node[:,bdnode] returns boundary nodes.\n\nbdedge = Vector of indices for boundary edges.\n\nis_bdnode = Vector of booleans size N which donotes which are on the boundary\n\nis_bdelem = Vector of booleans size NT which denotes which are on the boundary\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqPDEBase.setboundary",
    "page": "Meshes",
    "title": "DiffEqPDEBase.setboundary",
    "category": "Function",
    "text": "setboundary(node::AbstractArray,elem::AbstractArray,bdtype)\n\nsetboundary(fem_mesh::FEMMesh,bdtype)\n\nTakes in the fem_mesh and creates an array bdflag which denotes the boundary types. 1 stands for dirichlet, 2 for neumann, 3 for robin.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqPDEBase.fem_squaremesh",
    "page": "Meshes",
    "title": "DiffEqPDEBase.fem_squaremesh",
    "category": "Function",
    "text": "fem_squaremesh(square,h)\n\nReturns the grid in the iFEM form of the two arrays (node,elem)\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqPDEBase.notime_squaremesh",
    "page": "Meshes",
    "title": "DiffEqPDEBase.notime_squaremesh",
    "category": "Function",
    "text": "notime_squaremesh(square,dx,bdtype)\n\nComputes the (node,elem) square mesh for the square with the chosen dx and boundary settings.\n\n###Example\n\nsquare=[0 1 0 1] #Unit Square\ndx=.25\nnotime_squaremesh(square,dx,\"dirichlet\")\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqPDEBase.parabolic_squaremesh",
    "page": "Meshes",
    "title": "DiffEqPDEBase.parabolic_squaremesh",
    "category": "Function",
    "text": "parabolic_squaremesh(square,dx,dt,T,bdtype)\n\nComputes the (node,elem) x [0,T] parabolic square mesh for the square with the chosen dx and boundary settings and with the constant time intervals dt.\n\n###Example\n\nsquare=[0 1 0 1] #Unit Square\ndx=.25; dt=.25;T=2\nparabolic_squaremesh(square,dx,dt,T,:dirichlet)\n\n\n\n"
},

{
    "location": "features/mesh.html#Mesh-Generation-Functions-1",
    "page": "Meshes",
    "title": "Mesh Generation Functions",
    "category": "section",
    "text": "DiffEqPDEBase.findboundary\nDiffEqPDEBase.setboundary\nDiffEqPDEBase.fem_squaremesh\nDiffEqPDEBase.notime_squaremesh\nDiffEqPDEBase.parabolic_squaremesh"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_bunny",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_bunny",
    "category": "Function",
    "text": "meshExample_bunny() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_flowpastcylindermesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_flowpastcylindermesh",
    "category": "Function",
    "text": "meshExample_flowpastcylindermesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_lakemesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_lakemesh",
    "category": "Function",
    "text": "meshExample_lakemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_Lshapemesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_Lshapemesh",
    "category": "Function",
    "text": "meshExample_Lshapemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_Lshapeunstructure",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_Lshapeunstructure",
    "category": "Function",
    "text": "meshExample_Lshapeunstructure() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_oilpump",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_oilpump",
    "category": "Function",
    "text": "meshExample_oilpump() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_wavymesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_wavymesh",
    "category": "Function",
    "text": "meshExample_wavymesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_wavyperturbmesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_wavyperturbmesh",
    "category": "Function",
    "text": "meshExample_wavyperturbmesh() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#Example-Meshes-1",
    "page": "Meshes",
    "title": "Example Meshes",
    "category": "section",
    "text": "DiffEqProblemLibrary.meshExample_bunny\nDiffEqProblemLibrary.meshExample_flowpastcylindermesh\nDiffEqProblemLibrary.meshExample_lakemesh\nDiffEqProblemLibrary.meshExample_Lshapemesh\nDiffEqProblemLibrary.meshExample_Lshapeunstructure\nDiffEqProblemLibrary.meshExample_oilpump\nDiffEqProblemLibrary.meshExample_wavymesh\nDiffEqProblemLibrary.meshExample_wavyperturbmesh"
},

{
    "location": "features/mesh.html#Plot-Functions-1",
    "page": "Meshes",
    "title": "Plot Functions",
    "category": "section",
    "text": "The plot functionality is provided by a Plots.jl recipe. What is plotted is a \"trisurf\" of the mesh. To plot a mesh, simply use:plot(mesh::Mesh)All of the functionality (keyword arguments) provided by Plots.jl are able to be used in this command. Please see the Plots.jl documentation for more information."
},

{
    "location": "features/progress_bar.html#",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "page",
    "text": ""
},

{
    "location": "features/progress_bar.html#Juno-Progress-Bar-Integration-1",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "section",
    "text": "DifferentialEquations.jl integrates with the Juno progress bar in order to make long calculations more manageable. By default this feature is off for ODE and SDE solvers, but can be turned on via the keyword argument progressbar=true. The progress bar updates every progress_steps timesteps, which has a default value of 1000. Note that making this value really low could cause a performance hit, though from some basic testing it seems that with updates of at least 1000 steps on number (the fastest problems) there's no discernable performance degradation, giving a high upper bound.Note that the progressbar also includes a time estimate. This time-estimate is provided by linear extrapolation for how long it has taken to get to what percentage. For adaptive timestepping methods this should only be used as a rough estimate since the timesteps may (and will) change. By scrolling over the progressbar one will also see the current timestep. This can be used to track the solution's progress and find tough locations for the solvers."
},

{
    "location": "analysis/parameterized_functions.html#",
    "page": "ParameterizedFunctions",
    "title": "ParameterizedFunctions",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/parameterized_functions.html#ParameterizedFunctions-1",
    "page": "ParameterizedFunctions",
    "title": "ParameterizedFunctions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis/parameterized_functions.html#Transforming-User-Defined-Functions-to-ParameterizedFunctions-1",
    "page": "ParameterizedFunctions",
    "title": "Transforming User-Defined Functions to ParameterizedFunctions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis/parameterized_functions.html#ParameterizedFunction-Constructor-1",
    "page": "ParameterizedFunctions",
    "title": "ParameterizedFunction Constructor",
    "category": "section",
    "text": "The easiest way to make a ParameterizedFunction is to use the constructor:pf = ParameterizedFunction(f,params)The form for f is f(t,u,params,du) where params is any type which defines the parameters (it does not have to be an array, and it can be any user-defined type as well). The resulting ParameterizedFunction has the function call pf(t,u,params,du) which matches the original function, and a call pf(t,u,du) which uses internal parameters which can be used with a differential equation solver. Note that the internal parameters can be modified at any time via the field: pf.p = ....An additional version exists for f(t,u,params) which will then act as the not in-place version f(t,u) in the differential equation solvers.Note that versions exist for the other types of differential equations as well. There arepf = DAEParameterizedFunction(f,params)\npf = DDEParameterizedFunction(f,params)for DAEs and DDEs respectively. For DAEs, the in-place syntax is f(t,u,params,du,out) and the not in-place syntax is f(t,u,params,du). For DDEs, the in-place syntax is f(t,u,h,params,du) and the not in-place syntax is f(t,u,h,params)"
},

{
    "location": "analysis/parameterized_functions.html#Examples-1",
    "page": "ParameterizedFunctions",
    "title": "Examples",
    "category": "section",
    "text": "pf_func = function (t,u,p,du)\n  du[1] = p[1] * u[1] - p[2] * u[1]*u[2]\n  du[2] = -3 * u[2] + u[1]*u[2]\nend\n\npf = ParameterizedFunction(pf_func,[1.5,1.0])And now pf can be used in the differential equation solvers and the ecosystem functionality which requires explicit parameters (parameter estimation, etc.).Note that the not in-place version works the same:pf_func2 = function (t,u,p)\n  [p[1] * u[1] - p[2] * u[1]*u[2];-3 * u[2] + u[1]*u[2]]\nend\n\npf2 = ParameterizedFunction(pf_func2,[1.5,1.0])"
},

{
    "location": "analysis/parameterized_functions.html#Function-Definition-Macros-1",
    "page": "ParameterizedFunctions",
    "title": "Function Definition Macros",
    "category": "section",
    "text": "DifferentialEquations.jl provides a set of macros for more easily and legibly defining your differential equations. It exploits the standard notation for mathematically writing differential equations and the notation for \"punching differential equations into the computer\"; effectively doing the translation step for you. This is best shown by an example. Say we want to solve the ROBER model. Using the @ode_def macro from ParameterizedFunctions.jl, we can do this by writing:using ParameterizedFunctions\nf = @ode_def ROBERExample begin\n  dy₁ = -k₁*y₁+k₃*y₂*y₃\n  dy₂ =  k₁*y₁-k₂*y₂^2-k₃*y₂*y₃\n  dy₃ =  k₂*y₂^2\nend k₁=>0.04 k₂=>3e7 k₃=>1e4This looks just like pseudocode! The macro will expand this to the \"standard form\", i.e. the ugly computer form:f = (t,u,du) -> begin\n  du[1] = -0.04*u[1] + 1e4*u[2]*u[3]\n  du[2] = 0.04*u[1] - 3e7*u[2]^2 - 1e4*u[2]*u[3]\n  du[3] = 3e7*u[2]^2\nendNote that one doesn't need to use numbered variables: DifferentialEquations.jl will number the variables for you. For example, the following defines the function for the Lotka-Volterra model:f = @ode_def LotkaVolterraExample begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=>1.0 c=>3.0 d=1.0"
},

{
    "location": "analysis/parameterized_functions.html#Extra-Features-1",
    "page": "ParameterizedFunctions",
    "title": "Extra Features",
    "category": "section",
    "text": "Functions defined using the @ode_def macro come with many other features. For example, since we used => for a, b, and c, these parameters are explicitly saved. That is, one can do:f.a = 0.2to change the parameter f to 0.2. We can create a new function with new parameters using the name we gave the macro:g = LotkaVolterraExample(a=0.3,b=20.3)In this case, c will default to the value we gave it in the macro.Since the parameters are explicit, these functions can be used to analyze how the parameters affect the model. Thus ParameterizedFunctions, when coupled with the solvers, forms the backbone of functionality such as parameter estimation, parameter sensitivity analysis, and bifurcation analysis."
},

{
    "location": "analysis/parameterized_functions.html#Extra-Little-Tricks-1",
    "page": "ParameterizedFunctions",
    "title": "Extra Little Tricks",
    "category": "section",
    "text": "There are some extra little tricks you can do. Since @ode_def is a macro, you cannot directly make the parameters something that requires a runtime value. Thus the following will error:vec = rand(1,4)\nf = @ode_def LotkaVolterraExample begin\ndx = ax - bxy\ndy = -cy + dxy\nend a=>vec[1] b=>vec[2] c=>vec[3] d=vec[4]To do the same thing, instead initialize it with values of the same type, and simply replace them:vec = rand(1,4)\nf = @ode_def LotkaVolterraExample begin\ndx = ax - bxy\ndy = -cy + dxy\nend a=>1.0 b=>1.0 c=>1.0 d=vec[4]\nf.a,f.b,f.c = vec[1:3]Notice that when using =, it can inline expressions. It can even inline expressions of time, like d=3*t or d=2π. However, do not use something like d=3*x as that will fail to transform the x.In addition, one can also use their own function inside of the macro. For example:f(x,y,d) = erf(x*y/d)\nNJ = @ode_def FuncTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + f(x,y,d)\nend a=>1.5 b=>1 c=3 d=4will do fine. The symbolic derivatives will not work unless you define a derivative for f."
},

{
    "location": "analysis/parameterized_functions.html#Extra-Optimizations-1",
    "page": "ParameterizedFunctions",
    "title": "Extra Optimizations",
    "category": "section",
    "text": "Because the ParameterizedFunction defined by the macro holds the definition at a symbolic level, optimizations are provided by SymEngine. Using the symbolic calculator, in-place functions for many things such as Jacobians, Hessians, etc. are symbolically pre-computed. In addition, functions for the inverse Jacobian, Hessian, etc. are also pre-computed. In addition, parameter gradients and Jacobians are also used.Normally these will be computed fast enough that the user doesn't have to worry. However, in some cases you may want to restrict the number of functions (or get rid of a warning). Macros like @ode_def_nohes turn off the Hessian calculations, and @ode_def_noinvjac turns off the Jacobian inversion. For more information, please see the ParameterizedFunctions.jl documentation."
},

{
    "location": "analysis/parameterized_functions.html#Finite-Element-Method-Macros-1",
    "page": "ParameterizedFunctions",
    "title": "Finite Element Method Macros",
    "category": "section",
    "text": "The other macro which is currently provided is the @fem_def macro. This macro is for parsing and writing FEM functions. For example, in the FEM methods you have to use x[:,1] instead of x and x[:,2] instead of y. The macro will automatically do this replacement, along with adding in parameters. Since FEM functions are more general, we also have to give it the function signature. Using the macro looks like this:f  = @fem_def (x) DataFunction begin\n  sin(α.*x).*cos(α.*y)\nend α=>π\n\na = 2π\nb = 8π*π\ngD = @fem_def (x) DirichletBC begin\n  sin(α.*x).*cos(α.*y)/β\nend α=>a β=>bThis is equivalent to the definition:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)The true power comes in when dealing with nonlinear equations. The second argument, which we skipped over as (), is for listing the variables you wish to define the equation by. Mathematically you may be using u,v,w, etc., but for array-based algorithms you need to use u[:,1],u[:,2],etc. To avoid obfuscated code, the @fem_def macro does this conversion. For example:l = @fem_def (t,x,u) begin\n  du = ones(length(u))-α*u\n  dv = ones(length(v))-v\nend α=>0.5says there are two equations, one for u: (ones(length(u))-α*u) and one for v: (ones(length(v))-v). This expands to the equation:l = (t,x,u)  -> [ones(size(x,1))-.5u[:,1]   ones(size(x,1))-u[:,2]]When you have 10+ variables, using @fem_def leads to code which is much easier to read!"
},

{
    "location": "analysis/parameter_estimation.html#",
    "page": "Parameter Estimation",
    "title": "Parameter Estimation",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/parameter_estimation.html#Parameter-Estimation-1",
    "page": "Parameter Estimation",
    "title": "Parameter Estimation",
    "category": "section",
    "text": "Parameter estimation for ODE models is provided by the DiffEq suite. The current functionality includes build_loss_objective and lm_fit. Note these require that the problem is defined using a ParameterizedFunction."
},

{
    "location": "analysis/parameter_estimation.html#build_loss_objective-1",
    "page": "Parameter Estimation",
    "title": "build_loss_objective",
    "category": "section",
    "text": "build_loss_objective builds an objective function to be used with Optim.jl and MathProgBase-associated solvers like NLopt.function build_loss_objective(prob::DEProblem,alg,loss_func;\n                              mpg_autodiff = false,\n                              verbose_opt = false,\n                              verbose_steps = 100,\n                              prob_generator = problem_new_parameters,\n                              kwargs...)The first argument is the DEProblem to solve, and next is the alg to use. One can also choose verbose_opt and verbose_steps, which, in the optimization routines, will print the steps and the values at the steps every verbose_steps steps. mpg_autodiff uses autodifferentiation to define the derivative for the MathProgBase solver. The extra keyword arguments are passed to the differential equation solver."
},

{
    "location": "analysis/parameter_estimation.html#The-Loss-Function-1",
    "page": "Parameter Estimation",
    "title": "The Loss Function",
    "category": "section",
    "text": "loss_func(sol)is a function which reduces the problem's solution. While this is very flexible, a convenience routine is included for fitting to data:CostVData(t,data;loss_func = L2DistLoss)where t is the set of timepoints which the data is found at, and data which are the values that are known. Optionally, one can choose a loss function from LossFunctions.jl or use the default of an L2 loss."
},

{
    "location": "analysis/parameter_estimation.html#The-Problem-Generator-1",
    "page": "Parameter Estimation",
    "title": "The Problem Generator",
    "category": "section",
    "text": "The argument prob_generator allows one to specify a the function for generating new problems from a given parameter set. By default, this just builds a new version of f that inserts all of the parameters. For example, for ODEs this is given by the dispatch on DiffEqBase.problem_new_parameters that does the following:function problem_new_parameters(prob::ODEProblem,p)\n  f = (t,u,du) -> prob.f(t,u,p,du)\n  uEltype = eltype(p)\n  u0 = [uEltype(prob.u0[i]) for i in 1:length(prob.u0)]\n  tspan = (uEltype(prob.tspan[1]),uEltype(prob.tspan[2]))\n  ODEProblem(f,u0,tspan)\nendf = (t,u,du) -> prob.f(t,u,p,du) creates a new version of f that encloses the new parameters. The element types for u0 and tspan are set to match the parameters. This is required to make autodifferentiation work. Then the new problem with these new values is returned.One can use this to change the meaning of the parameters using this function. For example, if one instead wanted to optimize the initial conditions for a function without parameters, you could change this to:my_problem_new_parameters = function (prob::ODEProblem,p)\n  uEltype = eltype(p)\n  tspan = (uEltype(prob.tspan[1]),uEltype(prob.tspan[2]))\n  ODEProblem(prob.f,p,tspan)\nendwhich simply matches the type for time to p (once again, for autodifferentiation) and uses p as the initial condition in the initial value problem."
},

{
    "location": "analysis/parameter_estimation.html#build_lsoptim_objective-1",
    "page": "Parameter Estimation",
    "title": "build_lsoptim_objective",
    "category": "section",
    "text": "build_lsoptim_objective builds an objective function to be used with LeastSquaresOptim.jl.build_lsoptim_objective(prob,tspan,t,data;prob_generator = problem_new_parameters,kwargs...)The arguments are the same as build_loss_objective."
},

{
    "location": "analysis/parameter_estimation.html#lm_fit-1",
    "page": "Parameter Estimation",
    "title": "lm_fit",
    "category": "section",
    "text": "lm_fit is a function for fitting the parameters of an ODE using the Levenberg-Marquardt algorithm. This algorithm is really bad and thus not recommended since, for example, the Optim.jl algorithms on an L2 loss are more performant and robust. However, this is provided for completeness as most other differential equation libraries use an LM-based algorithm, so this allows one to test the increased effectiveness of not using LM.lm_fit(prob::DEProblem,tspan,t,data,p0;prob_generator = problem_new_parameters,kwargs...)The arguments are similar to before, but with p0 being the initial conditions for the parameters and the kwargs as the args passed to the LsqFit curve_fit function (which is used for the LM solver). This returns the fitted parameters."
},

{
    "location": "analysis/parameter_estimation.html#Local-Optimization-Examples-1",
    "page": "Parameter Estimation",
    "title": "Local Optimization Examples",
    "category": "section",
    "text": "We choose to optimize the parameters on the Lotka-Volterra equation. We do so by defining the function as a ParmaeterizedFunction:f = @ode_def_nohes LotkaVolterraTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=1.0 c=3.0 d=1.0\n\nu0 = [1.0;1.0]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)Notice that since we only used => for a, it's the only free parameter. We create data using the numerical result with a=1.5:sol = solve(prob,Tsit5())\nt = collect(linspace(0,10,200))\nrandomized = [(sol(t[i]) + .01randn(2)) for i in 1:length(t)]\nusing RecursiveArrayTools\ndata = vecvec_to_mat(randomized)Here we used vecvec_to_mat from RecursiveArrayTools.jl to turn the result of an ODE into a matrix.If we plot the solution with the parameter at a=1.42, we get the following:(Image: Parameter Estimation Not Fit)Notice that after one period this solution begins to drift very far off: this problem is sensitive to the choice of a.To build the objective function for Optim.jl, we simply call the build_loss_objective funtion:cost_function = build_loss_objective(prob,Tsit5(),CostVData(t,data),maxiters=10000)Note that we set maxiters so that way the differential equation solvers would error more quickly when in bad regions of the parameter space, speeding up the process. Now this cost function can be used with Optim.jl in order to get the parameters. For example, we can use Brent's algorithm to search for the best solution on the interval [0,10] by:using Optim\nresult = optimize(cost_function, 0.0, 10.0)This returns result.minimizer[1]==1.5 as the best parameter to match the data. When we plot the fitted equation on the data, we receive the following:(Image: Parameter Estimation Fit)Thus we see that after fitting, the lines match up with the generated data and receive the right parameter value.We can also use the multivariate optimization functions. For example, we can use the BFGS algorithm to optimize the parameter starting at a=1.42 using:result = optimize(cost_function, [1.42], BFGS())Note that some of the algorithms may be sensitive to the initial condition. For more details on using Optim.jl, see the documentation for Optim.jl.Lastly, we can use the same tools to estimate multiple parameters simultaneously. Let's use the Lotka-Volterra equation with all parameters free:f2 = @ode_def_nohes LotkaVolterraAll begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=>1.0 c=>3.0 d=>1.0\n\nu0 = [1.0;1.0]\ntspan = (0.0,10.0)\nprob = ODEProblem(f2,u0,tspan)To solve it using LeastSquaresOptim.jl, we use the build_lsoptim_objective function:cost_function = build_lsoptim_objective(prob,Tsit5(),CostVData(t,data))The result is a cost function which can be used with LeastSquaresOptim. For more details, consult the documentation for LeastSquaresOptim.jl:x = [1.3,0.8,2.8,1.2]\nres = optimize!(LeastSquaresProblem(x = x, f! = cost_function,\n                output_length = length(t)*length(prob.u0)),\n                LeastSquaresOptim.Dogleg(),LeastSquaresOptim.LSMR(),\n                ftol=1e-14,xtol=1e-15,iterations=100,grtol=1e-14)We can see the results are:println(res.minimizer)\n\nResults of Optimization Algorithm\n * Algorithm: Dogleg\n * Minimizer: [1.4995074428834114,0.9996531871795851,3.001556360700904,1.0006272074128821]\n * Sum of squares at Minimum: 0.035730\n * Iterations: 63\n * Convergence: true\n * |x - x'| < 1.0e-15: true\n * |f(x) - f(x')| / |f(x)| < 1.0e-14: false\n * |g(x)| < 1.0e-14: false\n * Function Calls: 64\n * Gradient Calls: 9\n * Multiplication Calls: 135and thus this algorithm was able to correctly identify all four parameters."
},

{
    "location": "analysis/parameter_estimation.html#More-Algorithms-(Global-Optimization)-via-MathProgBase-Solvers-1",
    "page": "Parameter Estimation",
    "title": "More Algorithms (Global Optimization) via MathProgBase Solvers",
    "category": "section",
    "text": "The build_loss_objective function builds an objective function which is able to be used with MathProgBase-associated solvers. This includes packages like IPOPT, NLopt, MOSEK, etc. Building off of the previous example, we can build a cost function for the single parameter optimization problem like:f = @ode_def_nohes LotkaVolterraTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=1.0 c=3.0 d=1.0\n\nu0 = [1.0;1.0]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5())\n\nt = collect(linspace(0,10,200))\nrandomized = [(sol(t[i]) + .01randn(2)) for i in 1:length(t)]\ndata = vecvec_to_mat(randomized)\n\nobj = build_loss_objective(prob,Tsit5(),CostVData(t,data),maxiters=10000)We can now use this obj as the objective function with MathProgBase solvers. For our example, we will use NLopt. To use the local derivative-free Constrained Optimization BY Linear Approximations algorithm, we can simply do:using NLopt\nopt = Opt(:LN_COBYLA, 1)\nmin_objective!(opt, obj)\n(minf,minx,ret) = NLopt.optimize(opt,[1.3])This finds a minimum at [1.49997]. For a modified evolutionary algorithm, we can use:opt = Opt(:GN_ESCH, 1)\nmin_objective!(opt, obj.cost_function2)\nlower_bounds!(opt,[0.0])\nupper_bounds!(opt,[5.0])\nxtol_rel!(opt,1e-3)\nmaxeval!(opt, 100000)\n(minf,minx,ret) = NLopt.optimize(opt,[1.3])We can even use things like the Improved Stochastic Ranking Evolution Strategy (and add constraints if needed). This is done via:opt = Opt(:GN_ISRES, 1)\nmin_objective!(opt, obj.cost_function2)\nlower_bounds!(opt,[-1.0])\nupper_bounds!(opt,[5.0])\nxtol_rel!(opt,1e-3)\nmaxeval!(opt, 100000)\n(minf,minx,ret) = NLopt.optimize(opt,[0.2])which is very robust to the initial condition. For more information, see the NLopt documentation for more details. And give IPOPT or MOSEK a try!"
},

{
    "location": "analysis/bifurcation.html#",
    "page": "Bifurcation Analysis",
    "title": "Bifurcation Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/bifurcation.html#Bifurcation-Analysis-1",
    "page": "Bifurcation Analysis",
    "title": "Bifurcation Analysis",
    "category": "section",
    "text": "Bifurcation analysis is provided by the wrapper package PyDSTool.jl, which wraps the functionality of PyDSTool. The the package has an interface for directly using PyDSTool itself, included is a higher level interface that makes these tools compatible with more standard JuliaDiffEq types.Note that this functionality is very rudimentary and still in development."
},

{
    "location": "analysis/bifurcation.html#Calcium-Bifurcation-Tutorial-1",
    "page": "Bifurcation Analysis",
    "title": "Calcium Bifurcation Tutorial",
    "category": "section",
    "text": "In this tutorial we will show how to do some simple bifurcation plots. We will follow the PyDSTool tutorial for the calcium channel model and re-create the results using the wrapped functionality."
},

{
    "location": "analysis/bifurcation.html#Specification-of-a-Model-1",
    "page": "Bifurcation Analysis",
    "title": "Specification of a Model",
    "category": "section",
    "text": "We will specify the model using a ParameterizedFunction:f = @ode_def_bare Calcium begin\n  dv = ( i + gl * (vl - v) - gca * 0.5 * (1 + tanh( (v-v1)/v2 )) * (v-vca) )/c\n  dw = v-w\nend vl=>-60 vca=>120 i=>0.0 gl=>2 gca=>4 c=>20 v1=>-1.2 v2=>18Next to build the ODE we need an initial condition and a starting timepoint.u0 = [0;0]\ntspan = [0;30]Then we use the following command to build the PyDSTool ODE:dsargs = build_ode(f,u0,tspan)Now we need to build the continuation type. Following the setup of PyDSTool's tutorial, we need to start near the steady state. The commands translate as:ode = ds[:Generator][:Vode_ODEsystem](dsargs)\node[:set](pars = Dict(\"i\"=>-220))\node[:set](ics  = Dict(\"v\"=>-170))\nPC = ds[:ContClass](ode)Once we have the continuation type, we can call the bifurcation_curve function. Instead of building the args into some object one-by-one, we simply make a function call with keyword arguments. Using the same arguments as the PyDSTool tutorial:bif = bifurcation_curve(PC,\"EP-C\",[\"i\"],\n                        max_num_points=450,\n                        max_stepsize=2,min_stepsize=1e-5,\n                        stepsize=2e-2,loc_bif_points=\"all\",\n                        save_eigen=true,name=\"EQ1\",\n                        print_info=true,calc_stab=true)This returns a BifurcationCurve type. Important fields of this type are:d: the values along the curve\nspecial_points: the values for the bifurcation points\nstab: an array which gives the stability of each point along the curve. \"S\" is for stable, N is for neutral, and U is for unstable.Instead of using the fields directly, we will use the plot recipe. The plot recipe requires you give the x,y coordinates to plot. Here we will plot it in the (i,v) plane:using Plots\nplot(bif,(:i,:v))(Image: bifurcation_plot)"
},

{
    "location": "analysis/sensitivity.html#",
    "page": "Sensitivity Analysis",
    "title": "Sensitivity Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/sensitivity.html#Sensitivity-Analysis-1",
    "page": "Sensitivity Analysis",
    "title": "Sensitivity Analysis",
    "category": "section",
    "text": "Sensitivity analysis for ODE models is provided by the DiffEq suite."
},

{
    "location": "analysis/sensitivity.html#Local-Sensitivity-Analysis-1",
    "page": "Sensitivity Analysis",
    "title": "Local Sensitivity Analysis",
    "category": "section",
    "text": "The local sensitivity of the solution to a parameter is defined by how much the solution would change by changes in the parameter, i.e. the sensitivity of the ith independent variable to the jth parameter is fracpartial ypartial p_j.The local sensitivity is computed using the sensitivity ODE:fracddtfracpartial upartial p_j=fracpartial fpartial yfracpartial ypartial p_j+fracpartial fpartial p_j=Jcdot S_j+F_jwhereJ=left(beginarraycccc\nfracpartial f_1partial y_1  fracpartial f_1partial y_2  cdots  fracpartial f_1partial y_k\nfracpartial f_2partial y_1  fracpartial f_2partial y_2  cdots  fracpartial f_2partial y_k\ncdots  cdots  cdots  cdots\nfracpartial f_kpartial y_1  fracpartial f_kpartial y_2  cdots  fracpartial f_kpartial y_k\nendarrayright)is the Jacobian of the system,F_j=left(beginarrayc\nfracpartial f_1partial p_j\nfracpartial f_2partial p_j\nvdots\nfracpartial f_kpartial p_j\nendarrayright)are the parameter derivatives, andS_j=left(beginarrayc\nfracpartial y_1partial p_j\nfracpartial y_2partial p_j\nvdots\nfracpartial y_kpartial p_j\nendarrayright)is the vector of sensitivities. Since this ODE is dependent on the values of the independent variables themselves, this ODE is computed simultaneously with the actual ODE system."
},

{
    "location": "analysis/sensitivity.html#Defining-a-Sensitivity-Problem-1",
    "page": "Sensitivity Analysis",
    "title": "Defining a Sensitivity Problem",
    "category": "section",
    "text": "To define a sensitivity problem, simply use the ODELocalSensitivityProblem type instead of an ODE type. Note that this requires a ParameterizedFunction with a Jacobian. For example, we generate an ODE with the sensitivity equations attached for the Lotka-Volterra equations by:f = @ode_def_nohes LotkaVolterraSensitivity begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=>1 c=>3 d=1\n\nprob = ODELocalSensitivityProblem(f,[1.0;1.0],(0.0,10.0))This generates a problem which the ODE solvers can solve:sol = solve(prob,DP8())Note that the solution is the standard ODE system and the sensitivity system combined. Therefore, the solution to the ODE are the first n components of the solution. This means we can grab the matrix of solution values like:x = vecvec_to_mat([sol[i][1:sol.prob.indvars] for i in 1:length(sol)])Since each sensitivity is a vector of derivatives for each function, the sensitivities are each of size sol.prob.numvars. We can pull out the parameter sensitivities from the solution as follows:da=[sol[i][sol.prob.numvars+1:sol.prob.numvars*2] for i in 1:length(sol)]\ndb=[sol[i][sol.prob.numvars*2+1:sol.prob.numvars*3] for i in 1:length(sol)]\ndc=[sol[i][sol.prob.numvars*3+1:sol.prob.numvars*4] for i in 1:length(sol)]This means that da[i][1] is the derivative of the x(t) by the parameter a at time sol.t[i]. Note that all of the functionality available to ODE solutions is available in this case, including interpolations and plot recipes (the recipes will plot the expanded system).Since the closure returns a vector of vectors, it can be helpful to use vecvec_to_mat from RecursiveArrayTools.jl in order to plot the solution.plot(sol.t,vecvec_to_mat(da),lw=3)(Image: Sensitivity Solution)Here we see that there is a periodicity to the sensitivity which matches the periodicity of the Lotka-Volterra solutions. However, as time goes on the sensitivity increases. This matches the analysis of Wilkins in Sensitivity Analysis for Oscillating Dynamical Systems."
},

{
    "location": "analysis/uncertainty_quantification.html#",
    "page": "Uncertainty Quantification",
    "title": "Uncertainty Quantification",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/uncertainty_quantification.html#Uncertainty-Quantification-1",
    "page": "Uncertainty Quantification",
    "title": "Uncertainty Quantification",
    "category": "section",
    "text": "Uncertainty quantification allows a user to identify the uncertainty associated with the numerical approximation given by DifferentialEquations.jl. This page describes the different methods available for quantifying such uncertainties."
},

{
    "location": "analysis/uncertainty_quantification.html#ProbInts-1",
    "page": "Uncertainty Quantification",
    "title": "ProbInts",
    "category": "section",
    "text": "The ProbInts method for uncertainty quantification involves the transformation of an ODE into an associated SDE where the noise is related to the timesteps and the order of the algorithm. This is implemented into the DiffEq system via a callback function. The first form is:ProbIntsUncertainty(σ,order,save=true)σ is the noise scaling factor and order is the order of the algorithm. save is for choosing whether this callback should control the saving behavior. Generally this is true unless one is stacking callbacks in a CallbackSet. It is recommended that σ is representative of the size of the errors in a single step of the equation.If you are using an adaptive algorithm, the callbackAdaptiveProbIntsUncertainty(order,save=true)determines the noise scaling automatically using an internal error estimate."
},

{
    "location": "analysis/uncertainty_quantification.html#Example-1:-FitzHugh-Nagumo-1",
    "page": "Uncertainty Quantification",
    "title": "Example 1: FitzHugh-Nagumo",
    "category": "section",
    "text": "In this example we will determine our uncertainty when solving the FitzHugh-Nagumo model with the Euler() method. We define the FitzHugh-Nagumo model using the @ode_def macro:fitz = @ode_def_nohes FitzhughNagumo begin\n  dV = c*(V - V^3/3 + R)\n  dR = -(1/c)*(V -  a - b*R)\nend a=0.2 b=0.2 c=3.0\nu0 = [-1.0;1.0]\ntspan = (0.0,20.0)\nprob = ODEProblem(fitz,u0,tspan)Now we define the ProbInts callback. In this case, our method is the Euler method and thus it is order 1. For the noise scaling, we will try a few different values and see how it changes. For σ=0.2, we define the callback as:cb = ProbIntsUncertainty(0.2,1)This is akin to having an error of approximately 0.2 at each step. We now build and solve a MonteCarloProblem for 100 trajectories:monte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Euler(),num_monte=100,callback=cb,dt=1/10)Now we can plot the resulting Monte Carlo solution:using Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_02)If we increase the amount of error, we see that some parts of the equation have less uncertainty than others. For example, at σ=0.5:cb = ProbIntsUncertainty(0.5,1)\nmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Euler(),num_monte=100,callback=cb,dt=1/10)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_05)But at this amount of noise, we can see how we contract to the true solution by decreasing dt:cb = ProbIntsUncertainty(0.5,1)\nmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Euler(),num_monte=100,callback=cb,dt=1/100)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_lowh)"
},

{
    "location": "analysis/uncertainty_quantification.html#Example-2:-Adaptive-ProbInts-on-FitzHugh-Nagumo-1",
    "page": "Uncertainty Quantification",
    "title": "Example 2: Adaptive ProbInts on FitzHugh-Nagumo",
    "category": "section",
    "text": "While the first example is academic and shows how the ProbInts method scales, the fact that one should have some idea of the error in order to calibrate σ can lead to complications. Thus the more useful method in many cases is the AdaptiveProbIntsUncertainty version. In this version, no σ is required since this is calculated using an internal error estimate. Thus this gives an accurate representation of the possible error without user input.Let's try this with the order 5 Tsit5() method on the same problem as before:cb = AdaptiveProbIntsUncertainty(5)\nsol = solve(prob,Tsit5())\nmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Tsit5(),num_monte=100,callback=cb)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_adaptive_default)In this case, we see that the default tolerances give us a very good solution. However, if we increase the tolerance a lot:cb = AdaptiveProbIntsUncertainty(5)\nsol = solve(prob,Tsit5())\nmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Tsit5(),num_monte=100,callback=cb,abstol=1e-3,reltol=1e-1)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_adaptive_default)we can see that the moments just after the rise can be uncertain."
},

{
    "location": "analysis/uncertainty_quantification.html#Example-3:-Adaptive-ProbInts-on-the-Lorenz-Attractor-1",
    "page": "Uncertainty Quantification",
    "title": "Example 3: Adaptive ProbInts on the Lorenz Attractor",
    "category": "section",
    "text": "One very good use of uncertainty quantification is on chaotic models. Chaotic equations diverge from the true solution according to the error exponentially. This means that as time goes on, you get further and further from the solution. The ProbInts method can help diagnose how much of the timeseries is reliable.As in the previous example, we first define the model:g = @ode_def_bare LorenzExample begin\n  dx = σ*(y-x)\n  dy = x*(ρ-z) - y\n  dz = x*y - β*z\nend σ=>10.0 ρ=>28.0 β=(8/3)\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,30.0)\nprob = ODEProblem(g,u0,tspan)and then we build the ProbInts type. Let's use the order 5 Tsit5 again.cb = AdaptiveProbIntsUncertainty(5)Then we solve the MonteCarloProblemmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Tsit5(),num_monte=100,callback=cb)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_chaos)Here we see that by t about 22 we start to receive junk. We can increase the amount of time before error explosion by using a higher order method with stricter tolerances:tspan = (0.0,40.0)\nprob = ODEProblem(g,u0,tspan)\ncb = AdaptiveProbIntsUncertainty(7)\nmonte_prob = MonteCarloProblem(prob)\nsim = solve(monte_prob,Vern7(),num_monte=100,callback=cb,reltol=1e-6)\nusing Plots; plotly(); plot(sim,vars=(0,1),linealpha=0.4)(Image: uncertainty_high_order)we see that we can extend the amount of time until we recieve junk."
},

{
    "location": "analysis/dev_and_test.html#",
    "page": "Algorithm Development and Testing",
    "title": "Algorithm Development and Testing",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/dev_and_test.html#Algorithm-Development-and-Testing-1",
    "page": "Algorithm Development and Testing",
    "title": "Algorithm Development and Testing",
    "category": "section",
    "text": "Algorithm developing and testing tools are provided by DiffEqDevTools.jl and are documented in the developer documentation."
},

{
    "location": "models/multiscale.html#",
    "page": "Multi-Scale Models",
    "title": "Multi-Scale Models",
    "category": "page",
    "text": ""
},

{
    "location": "models/multiscale.html#Multi-Scale-Models-1",
    "page": "Multi-Scale Models",
    "title": "Multi-Scale Models",
    "category": "section",
    "text": "The multi-scale modeling functionality is provided by MultiScaleArrays.jl. It allows for designing a multi-scale model as an extension of an array, which in turn can be directly used in the native Julia solvers of DifferentialEquations.jl."
},

{
    "location": "models/multiscale.html#More-Information-1",
    "page": "Multi-Scale Models",
    "title": "More Information",
    "category": "section",
    "text": "For more information, please see the MultiScaleArrays.jl README."
},

{
    "location": "models/financial.html#",
    "page": "Financial Models",
    "title": "Financial Models",
    "category": "page",
    "text": ""
},

{
    "location": "models/financial.html#Financial-Models-1",
    "page": "Financial Models",
    "title": "Financial Models",
    "category": "section",
    "text": "The financial models functionality is provided by DiffEqFinancial.jl and helps the user build and solve the differential equation based financial models biological models."
},

{
    "location": "models/financial.html#SDE-Model-Library-1",
    "page": "Financial Models",
    "title": "SDE Model Library",
    "category": "section",
    "text": "The following constructors create SDEProblem types which can be solved using the stochastic differential equation solvers."
},

{
    "location": "models/financial.html#HestonProblem-1",
    "page": "Financial Models",
    "title": "HestonProblem",
    "category": "section",
    "text": "dS = Sdt + sqrtvSdW_1 \ndv = (-v)dt + sqrtvdW_2 \ndW_1 dW_2 =  dtConstructor:HestonProblem(μ,κ,Θ,σ,ρ,u0,tspan)"
},

{
    "location": "models/financial.html#GeneralizedBlackScholesProblem-1",
    "page": "Financial Models",
    "title": "GeneralizedBlackScholesProblem",
    "category": "section",
    "text": "d ln S(t) = (r(t) - q(t) - frac(tS)^22)dt +  dW_tSolves for log S(t). Constructor:GeneralizedBlackScholesProblem(r,q,Θ,σ,u0,tspan)"
},

{
    "location": "models/financial.html#BlackScholesProblem-1",
    "page": "Financial Models",
    "title": "BlackScholesProblem",
    "category": "section",
    "text": "d ln S(t) = (r(t) - frac(tS)^22)dt +  dW_tSolves for log S(t). Constructor:BlackScholesProblem(r,Θ,σ,u0,tspan)"
},

{
    "location": "models/financial.html#ExtendedOrnsteinUhlenbeckProblem-1",
    "page": "Financial Models",
    "title": "ExtendedOrnsteinUhlenbeckProblem",
    "category": "section",
    "text": "dx = a(b(t)-x)dt +  dW_tConstructor:ExtendedOrnsteinUhlenbeckProblem(a,b,σ,u0,tspan)"
},

{
    "location": "models/financial.html#OrnsteinUhlenbeckProblem-1",
    "page": "Financial Models",
    "title": "OrnsteinUhlenbeckProblem",
    "category": "section",
    "text": "dx = a(r-x)dt +  dW_tConstructor:OrnsteinUhlenbeckProblem(a,r,σ,u0,tspan)"
},

{
    "location": "models/biological.html#",
    "page": "Biological Models",
    "title": "Biological Models",
    "category": "page",
    "text": ""
},

{
    "location": "models/biological.html#Biological-Models-1",
    "page": "Biological Models",
    "title": "Biological Models",
    "category": "section",
    "text": "The biological models functionality is provided by DiffEqBiological.jl and helps the user build discrete stochastic and differential equation based systems biological models. These tools allow one to define the models at a high level by specifying reactions and rate constants, and the creation of the actual problems is then handled by the modeling package."
},

{
    "location": "models/biological.html#The-Reaction-Type-1",
    "page": "Biological Models",
    "title": "The Reaction Type",
    "category": "section",
    "text": "The basic type for BiologicalModels.jl is the reaction type. Its constructor is:Reaction(rate_constant,reactants,stoichiometry)rate_constant is the rate constant for the reaction. reactants is a list of reactants for the reaction. For example, reactants=(2,3) means that the reaction rate is rate_constant*u[2]*u[3]. stoichiometry is then the stoichiometry for the result. It is a list of tuples of changes to apply when the reaction takes place. Each tuple (i,j) means \"modify reactiant i by amount j\". For example, the tuple (2,-1) means \"decrease reactant 2 by 1\"."
},

{
    "location": "models/biological.html#Note-About-Rate-Dependency-1",
    "page": "Biological Models",
    "title": "Note About Rate Dependency",
    "category": "section",
    "text": "Note that currently, the reactions are used to build ConstantRateJumps. This means that the solver requires that the rates are constant between jumps in order to achieve full accuracy. The rates for the ConstantRateJump may depend on each other, but they may not depend on the differential equation themselves."
},

{
    "location": "models/biological.html#Variable-Rate-Reactions-1",
    "page": "Biological Models",
    "title": "Variable Rate Reactions",
    "category": "section",
    "text": "VariableRateReaction are allowed to have their rates change continuously, depending on time or values related to a differential equation. The constructor is:function VariableRateReaction(rate_constant,reactants,stoichiometry;\n                              idxs = nothing,\n                              rootfind=true,\n                              interp_points=10,\n                              abstol=1e-12,reltol=0)The additional keyword arguments are for controlling the associated ContinuousCallback used to handle VariableRateReactions in simulations."
},

{
    "location": "models/biological.html#Example-Reaction-1",
    "page": "Biological Models",
    "title": "Example Reaction",
    "category": "section",
    "text": "An example reaction is:r1 = Reaction(1e-4,(1,2),((1,-1),(2,1)))Here, the rate_constant is 1e-4. The reactants are components 1 and 2, meaning the reaction rate is calculated by rate_constant*u[1]*u[2]. The stoichiometry does two things. First, the (1,-1) means that, when the reaction occurs, we decrease u[1] by 1. Secondly, the (2,1) means we increase u[2] by 1. Thus this reaction is a reaction where chemical 1 changes into chemical 2, and it is enhanced by chemical 2 itself."
},

{
    "location": "models/biological.html#GillespieProblem-1",
    "page": "Biological Models",
    "title": "GillespieProblem",
    "category": "section",
    "text": "These reactions can be added to a differential equation (or discrete) problem using the GillespieProblem. This is simply a constructor which interprets the reactions as jumps, and builds the associated JumpProblem. Thus its constructor is the same:GillespieProblem(prob,aggregator::AbstractAggregatorAlgorithm,rs::AbstractReaction...;kwargs...)This is the exact same constructor as the JumpProblem, except now we pass reactions (or VariableRateReactions, or a ReactionSet) instead of jumps. Thus for more information, see the description of the JumpProblem."
},

]}
