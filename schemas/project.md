---
name: ""
link: ""
logo: ""
skills: []
locale: "es"
order: 0
description: ""
_inputs:
  name:
    type: text
    comment: Project title
  link:
    type: url
    comment: Optional live/repo URL
  logo:
    type: select
    options:
      values:
        - animepol
        - tonela
        - ordenna
        - lampara
  skills:
    type: array
    comment: Stack tags
  locale:
    type: select
    options:
      values:
        - es
        - en
  order:
    type: number
  description:
    type: textarea
---
