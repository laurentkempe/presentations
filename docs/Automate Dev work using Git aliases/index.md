## Automate dev work

 ### using Git Aliases
<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

by [Laurent Kempé](https://laurentkempe.com)

23 Jan. 2020

<i class="fab fa-twitter"></i> [@laurentkempe](https://twitter.com/laurentkempe) - <i class="fab fa-github"></i> [@laurentkempe](https://github.com/laurentkempe)

---

# why?

Because

As a **developer**, I want to

**automate repetitive tasks**,

so that my life is easier.

<!-- Slide with <span class="highlight">highlight</span> -->

---

# Daily Git tasks

* Create feature branch
* Checkout feature branch
* Review feature branch
* Commit changes
* Rebasing
* ...

<!-- > Here is a nice styled blockquote -->

---

# Conventions are
# 👍 for automation


---

## Important Conventions

1. Naming of branches
2. Commit message format

---

## Naming of branches

❗ Use a **ticket number**, to allow navigation between source code repository and requirements

e.g. 

feature/**PRJ-123**-my-feature-branch

---

## Commit message format

❗ Start with **ticket number**

e.g.

**PRJ-123** Add new feature


<!-- ```ruby
def addition
  a+b
end
``` -->

---

## Simple Git alias

```bash
> git checkout feature/PRJ-123-my-feature-branch
```

With

```bash
[alias]
co = checkout
```

You type

```bash
> git co feature/PRJ-123-my-feature-branch
```

---

## 😢 That's too much to type!

---

## Use autocompletion 😊

---

## But We want more 💓

```bash
> git cfb 123
```

---

## Composing Git aliases

```
[alias]

# Get current branch name
currentbranch = rev-parse --abbrev-ref HEAD

# Get Jira ticket number from current branch name
jiran = "!f() { git currentbranch |
                sed "s/feature.//" |
                grep -o -E "PRJ+-[0-9]+";
              }; f"

# Open Browser on Jira ticket
j = "!explorer https://company.atlassian.net/browse/$(git jiran)"
```

---

## Some explanation

```
	# Rebase interactive on HEAD back to number of commit defined by $1
	ri = "!f() { git rebase -i HEAD~$1; }; f"
```

!f() { } defines a bash function “f“.

Gives access to command line variables:

* **$1** is the 1st parameter passed to the command.
* **$2** is the 2nd parameter passed to the command...
* **$@** means all command line parameters passed.

Allow to chain git commands with **&&** and uses the entire Unix toolkit.

---


## Simplified feature branch checkout

```
[alias]

# Find feature branch from ticket number
fb = "!f() { git branch -a |
             grep "feature/.*$1.*" |
             sed "s/remotes.//" |
             sed "s/origin.//" |
             sort -u;
           }; f"

# Checkout feature branch from ticket number
cfb = "!f() { featureBranch=$(git fb $1);
              git checkout $featureBranch;
              git pull;
            }; f"
```

---

# Questions ❓

---

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

All my Git aliases are on Github

[laurentkempe/dotfiles](https://github.com/laurentkempe/dotfiles/blob/master/git/.gitconfig.aliases#L13)

---

# References 🔗

[Phil Haack, GitHub Flow Like a Pro with these 13 Git Aliases](https://haacked.com/archive/2014/07/28/github-flow-aliases/)

[Nicola Paolucci, One weird trick for powerful Git aliases](https://www.atlassian.com/blog/git/advanced-git-aliases)

[Git Wiki, Aliases](https://git.wiki.kernel.org/index.php/Aliases#What.27s_new.3F)

---

# Thank You! 🚀

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

### [Laurent Kempé](https://laurentkempe.com)
