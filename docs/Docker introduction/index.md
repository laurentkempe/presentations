<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

# Docker
# introduction

by [Laurent Kempé](https://laurentkempe.com)

?? Feb. 2020

---

# What is Docker❓

* Docker - the open source project
* Docker Inc. - the company
* Containers

![Docker](https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png)<!-- .element style="border: 0; background: None; box-shadow: None; width:40%" -->

Note:

From https://us.pycon.org/2016/site_media/media/tutorial_handouts/DockerSlides.pdf

The origins of the Docker Project
• dotCloud was operating a PaaS, using a custom container engine.
• This engine was based on OpenVZ (and later, LXC) and AUFS.
• It started (circa 2008) as a single Python script.
• By 2012, the engine had multiple (~10) Python components.
(and ~100 other micro-services!)
• End of 2012, dotCloud refactors this container engine.
• The codename for this project is "Docker."

First public release
• March 2013, PyCon, Santa Clara:
"Docker" is shown to a public audience for the first time.
• It is released with an open source license.
• Very positive reactions and feedback!
• The dotCloud team progressively shifts to Docker development.
• The same year, dotCloud changes name to Docker.
• In 2014, the PaaS activity is sold.

The Docker Project
• The initial container engine is now known as "Docker Engine."
• Other tools have been added:
• Docker Compose (formerly "Fig")
• Docker Machine
• Docker Swarm
• Kitematic (acquisition)
• Tutum (recent acquisition)

About Docker Inc.
• Founded in 2009.
• Formerly dotCloud Inc.
• Primary sponsor of the Docker Project.
• Hires maintainers and contributors.
• Provides infrastructure for the project.
• Runs the Docker Hub.
• HQ in San Francisco.
• Backed by more than 100M in venture capital.

---

# Container & VMs

## Same goals

Isolate applications and their dependencies into a self-contained unit that can run anywhere

## Main difference

Their architectural approach

Note:

See A Beginner-Friendly Introduction to Containers, VMs and Docker - https://www.freecodecamp.org/news/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b/

---

# Virtual Machines

* Virtualize a real computer
* Abstract physical hardware
  * Package OS, application and dependencies
* Run on top of a “hypervisor”

![Virtual Machines](https://www.docker.com/sites/default/files/d8/2018-11/container-vm-whatcontainer_2.png)<!-- .element style="border: 0; background: None; box-shadow: None; width:40%;" -->

Note:

* Each VM includes a full copy of an operating system, the application, necessary binaries and libraries - taking up tens of GBs
* VMs can also be slow to boot
* A hypervisor is a piece of software, firmware, or hardware that VMs run on top of. The hypervisors themselves run on physical computers, referred to as the “host machine”. The host machine provides the VMs with resources, including RAM and CPU

---

# Containers

* Virtualize the operating system
* Abstract the app layer
  * Package application and dependencies
* Run on top of docker daemon

![Containers](https://www.docker.com/sites/default/files/d8/2018-11/docker-containerized-appliction-blue-border_2.png)<!-- .element style="border: 0; background: None; box-shadow: None; width:40%;" -->

Note:

* Containers are isolated, but share OS kernel and, where appropriate, bins/libraries
* The one big difference between containers and VMs is that containers *share* the host system’s kernel with other containers.
* Many containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.
* Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and Operating systems.
* More portable and efficient
* Unlike a VM which provides hardware virtualization, a container provides operating-system-level virtualization by abstracting the “user space”

---

# Why Docker❓

* Isolation
* Lightweight
* Simplicity
* Workflow
* Community

Note:

* Isolation: Each container gets its own isolated user space to allow multiple containers to run on a single host machine. We can see that all the operating system level architecture is being shared across containers. The only parts that are created from scratch are the bins and libs.
* Lightweight: Container images are typically tens of MBs in size, can handle more applications
* Simplicity: Docker has made it much easier for anyone — developers, systems admins, architects and others — to take advantage of containers in order to quickly build and test portable applications. 
* Workflow: It allows anyone to package an application on their laptop, which in turn can run unmodified on any public cloud, private cloud, or even bare metal. The mantra is: “build once, run anywhere.”
* Community: Docker Hub has tens of thousands of public images created by the community that are readily available for use

---

# Docker concepts

* Docker engine; client-server application
  * Docker daemon & REST API
  * Docker CLI
* Docker registry
* Docker objects; Images & Containers

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

---

# Docker daemon

* Listens for Docker API requests
* Manages Docker objects
  * images, containers, networks and volumes
* Can communicate with other daemons to manage Docker services

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

---

# Docker CLI

* Primary way to interact with Docker
* Uses the Docker API
* Can communicate with more than one daemon

> docker run -i -t ubuntu /bin/bash

 ![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

---

# Docker registries

* Stores Docker images
* Can run your own private registry
* Docker Hub is a public registry that anyone can use

> docker push

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

---

# Docker images

* Read-only template, instructions for creating a Docker container
* Often, based on another image
* Create your own or use one created by others
* Created from a Dockerfile

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

Note:

 For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

---

# Dockerfile

* Simple syntax for defining the steps needed to create an image and run it
* Each instruction creates a layer in the image
* When changed and image is rebuilt, only layers which have changed are rebuilt

Note:

This is what makes images so lightweight, small, and fast, when compared to other virtualization technologies.

---

# Multi-stage Dockerfile

```Dockerfile
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["webapi.csproj", "./"]
RUN dotnet restore "./webapi.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "webapi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "webapi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "webapi.dll"]
```

---

# Docker container

* Runnable instance of an image
* Create, start, stop, move, or delete a container
* Connects to one or more networks, attach storage

![Docker architecture](https://docs.docker.com/engine/images/architecture.svg)<!-- .element style="border: 0; background: None; box-shadow: None; width:60%;" -->

Note:

By default, a container is relatively well isolated from other containers and its host machine. You can control how isolated a container’s network, storage, or other underlying subsystems are from other containers or from the host machine.

A container is defined by its image as well as any configuration options you provide to it when you create or start it. When a container is removed, any changes to its state that are not stored in persistent storage disappear.

---

# 💗 Demo 🚀

---

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

# Thank You! 🚀

## [Laurent Kempé](https://laurentkempe.com)

---

# Questions ❓

---

# References 🔗

[A Beginner-Friendly Introduction to Containers, VMs and Docker](https://www.freecodecamp.org/news/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b/)

[Docker overview](https://docs.docker.com/engine/docker-overview/)

[Docker resources](https://www.docker.com/resources)
