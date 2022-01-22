# Landon Schropp's Personal Website Theme

This repo contains the theme that powers my personal website. While this repo is not a Gatsby theme
(which requires the content to be packaged as a Gatsby plugin), it is intended to be used only with
Gatsby and exports gatsby-specific functionality.

## Deployment

Instead of dealing with the hassle of a private package repository, the consumers of this repo pull
the package as a Git repository instead. In order to enable this, this repository is configured with
a deploy key which was generated from [these instructions](https://bit.ly/3KBnaYX).

In order to make sure the GitHub Action that configures the SSH agent configures itself correctly
using the key comment, it's important to include the name of the repository in the comment when
generating the key. This can be done by following [these instructions](https://bit.ly/3rBi86h).

``` bash
ssh-keygen -t ed25519 -C "git@github.com:LandonSchropp/landon-schropp-gatsby-theme.git"
```
