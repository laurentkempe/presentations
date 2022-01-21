<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

# [NUKE](https://nuke.build/)

## .NET build automation

by [Laurent Kempé](https://laurentkempe.com)

2 Feb 2022

<i class="fab fa-twitter"></i> [@laurentkempe](https://twitter.com/laurentkempe) - <i class="fab fa-github"></i> [@laurentkempe](https://github.com/laurentkempe)

---

# History

* From TeamCity UI with MSBuild
* From [Cake](https://cakebuild.net/) build with C# scripts
* To [Nuke](https://nuke.build/) builds automation fully in C# 🏆

All running using [TeamCity](https://www.jetbrains.com/teamcity/)!

---

## Why TeamCity UI (20??)

* Already used in personal projects
* Ultra fast getting started
* Easy integration with Svn then Git and finally GitHub

---

## Why Cake 🍰 (June 2016)

* Unify our different build processes in "one"
* Versioning build scripts with our app source code
* Build on any machine where .NET runs
* Easy integration in TeamCity
* C# like
* Open source and great responsive community

---

## Why NUKE 💣 (Feb 2021)

* It is real [C#](https://docs.microsoft.com/en-us/dotnet/csharp/) 😍
* No more magic strings, no more CTRL+F 💝 
* All build pipelines in one .NET project 🥰
  * Code navigation, Refactoring, Debugging 😻
  * IDE plugin (Rider, Visual Studio, VS Code) 🤩
  * Unit test, why not?
* Easy CLI Tools interaction with Fluent API
* Generate CI Integration with partitioning
* Cloud build services GitHub Actions, Azure pipelines...🔮<!-- .slide: data-fullscreen -->

---
<!-- .slide: data-background-image="img/nuke--plan.png" -->

# NUKE --plan
# &nbsp;
# example

---

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

# OK [Laurent](https://laurentkempe.com)!!!
## it sounds great 😎
## show us the code 👩🏼‍💻

---

# 💗 DEMO 🚀

Getting started / CLI
```powershell
> dotnet tool install Nuke.GlobalTool --global
> nuke :setup
> nuke Compile (with PowerShell, ZSH, BASH auto completion)
> .\build.ps1 [targets] [arguments]
```

C# build project

Rider IDE integration with plugin

---

> Here is a nice styled blockquote

---

# Slide 3

```ruby
def addition
  a+b
end
```

---

# Thank You! 🚀

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

## [Laurent Kempé](https://laurentkempe.com)

<i class="fab fa-twitter"></i> [@laurentkempe](https://twitter.com/laurentkempe) - <i class="fab fa-github"></i> [@laurentkempe](https://github.com/laurentkempe)

---

# References 📘

* [NUKE website](https://nuke.build/)
* [Rider NUKE plugin](https://plugins.jetbrains.com/plugin/10803-nuke-support)
* [NUKE <i class="fab fa-twitter"></i>](https://twitter.com/nukebuildnet)

* [Cake Presentation (C# Make)](https://sway.office.com/G8xS5gVqbwOA9euI)
