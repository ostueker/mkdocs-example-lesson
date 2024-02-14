---
title: "Formatting"
teaching: 10
exercises: 0
questions:
- "How are The lessons formatted?"
objectives:
- "Explain the header of each episode."
- "Explain the overall structure of each episode."
- "Explain why blockquotes are used to format parts of episodes."
- "Explain the use of code blocks in episodes."
keypoints:
- "Lesson episodes are stored in _episodes/dd-subject.md."
- "Each episode's title must include a title, time estimates, motivating questions, lesson objectives, and key points."
- "Episodes should not use sub-titles or HTML layout."
- "Code blocks can have the source, regular output, or error class."
- "Special sections are formatted as blockquotes that open with a level-2 header and close with a class identifier."
- "Special sections may be callouts or challenges; other styles are used by the template itself."
---

A lesson consists of one or more episodes,
each of which has:

*   a [YAML][yaml] header containing required values
*   some teachable content
*   some exercises

The diagram below shows the internal structure of a single episode file
(click on the image to see a larger version):
<!-- 
<a href="{{ page.root }}/fig/episode-format.png">
  <img src="{{ page.root }}/fig/episode-format-small.png" alt="Formatting Rules" />
</a>
 -->
## Maximum Line Length

Limit all lines to a maximum of 100 characters.
`bin/lesson_check.py` will report lines longer than 100 characters
and this can block your contributions of being accepted.

The two reasons behind the decision to enforce a maximum line length are
(1) make diff and merge easier in the command line and other user interfaces
and
(2) make update of translation of the lessons easier.

## Locations and Names

Episode files are stored in `_episodes`
or, for the case of R Markdown files, `_episodes_rmd`
so that [Jekyll][jekyll] will create a [collection][jekyll-collection] for them.
Episodes are named `dd-subject.md`,
where `dd` is a two-digit sequence number (with a leading 0)
and `subject` is a one- or two-word identifier.
For example,
the first three episodes of this example lesson are
`_episodes/01-design.md`,
`_episodes/02-tooling.md`
and `_episodes/03-formatting.md`.
These become `/01-design/index.html`, `/02-tooling/index.html`, and `/03-formatting/index.html`
in the published site.
When referring to other episodes, use:

```
    [link text]({{ page.root }}{% link _episodes/dd-subject.md %})
```

_i.e._, use [Jekyll's link tag][jekyll-link-tag] and the name of the file.

## Episode Header

Each episode's [YAML][yaml] header must contain:

*   the episode's title
*   time estimates for teaching and exercises
*   motivating questions
*   lesson objectives
*   a summary of key points

These values are stored in the header so that [Jekyll][jekyll] will read them
and make them accessible in other pages as `site.episodes.the_episode.key`,
where `the_episode` is the particular episode
and `key` is the key in the [YAML][yaml] header.
This lets us do things like
list each episode's key questions in the syllabus on the lesson home page.

## Episode Structure

The episode layout template in `_layouts/episode.html` automatically creates
an introductory block that summarizes the lesson's teaching time,
exercise time,
key questions,
and objectives.
It also automatically creates a closing block that lists its key points.
In between,
authors should use only:

*   paragraphs
*   images
*   tables
*   ordered and unordered lists
*   code samples (described below).
*   special blockquotes (described below)

Authors should *not* use:

*   sub-titles (instead, use H2 subheadings (`##`) in the episode files)
*   HTML layout (e.g., `div` elements).


!!! note "Linking section IDs"
    
    In the HTML output each header of a section, code sample, exercise will be associated with an
    unique ID (the rules of the ID generation are given in kramdown
    [documentation](https://kramdown.gettalong.org/converter/html.html#auto-ids),
    but it is easier to look for them directly in the page sources).
    These IDs can be used to easily link to the section by attaching the hash (`#`) followed by the ID
    to the page's URL (like [this](#linking-section-ids)). For example, the instructor might copy the
    link to the etherpad, so that the lesson opens in learners' web browser directly at the right
    spot.


## Formatting Code

Inline code fragments are formatted using backticks (`` ` ``).  
Longer code blocks are formatted by opening and closing the block with `` ``` `` (three backticks) :

````{.text .raw}
```
for thing in collection:
    do_something
```
````

which is rendered as:
```
for thing in collection:
    do_something
```

The three backticks can be followed by the name of a language (e.g. `python`) for syntax highlighting:
````{.text .raw}
```python
for thing in collection:
    do_something
```
````
which is rendered as:
```python
for thing in collection:
    do_something
```

Or they can be followed by an expression in braces, where the first denotes the language and the 
second a class for additional formatting:

````{.text .raw}
```{.text .class}
Language: `text` (no highlighting) and class `.class`
```
````

The [template]({{ site.template_repo }}) provides three styles for code blocks:


#### Program Output: 
With class `.output`, this code ...
````{.text .raw}
```{.text .output}
{.text .output}: program output.
```
````
will be shown as:
```{.text .output }
{.text .output}: program output.
```

#### Error
With class `.error`, this code ...
````{.text .raw}
```{.text .error}
{.text .error}: error messages.
```
````
will be shown as:
```{.text .error}
{.text .error}: error messages.
```

#### Warning
With class `.warning`, this code ...
````{.text .raw}
```{.text .warning}
{.text .error}: warning messages.
```
````
will be shown as:
```{.text .warning}
{.text .warning}: warning messages.
```

### Syntax Highlighting

The following styles like `.source`, but include syntax highlighting for the
specified language.
Please use them where possible to indicate the type of source being displayed,
and to make code easier to read.

<div class="grid cards" markdown>
- `bash`: Bash commands:
  ```bash
  echo "Hello World"
  ```

- `console`:   Shell command with prompt and output:
  ```console
  $ ls
  Desktop     Downloads   Movies      Pictures
  Documents   Library     Music       Public
  ```

- `html`: HTML source:
  ```html
  <html>
  <body>
  <em>Hello World</em>
  </body>
  </html>
  ```

- `make`: Makefiles:
  ```make
  all:
      g++ main.cpp hello.cpp -o hello
  ```

- `matlab`: MATLAB source:
  ```matlab
  disp('Hello, world!')
  ```

- `python`: Python source:
  ```python
  print("Hello World")
  ```

- `r`: R source:
  ```r
  cat("Hello World")
  ```
  
- `sql`: SQL source:
  ```sql
  CREATE PROCEDURE HelloWorld AS
  PRINT 'Hello, world!'
  RETURN (0)
  ```
</div>

All languages that are recognized and will show the name of the language in the tile are:

|           |           |           |           |           |           |           |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Basic     | Chapel    | D         | Java      | Make      | Python    | Scala     |
| Bash      | CMake     | Fortran   | Julia     | MATLAB    | R         | SQL       |
| C         | Console   | Go        | Kotlin    | OpenCL    | Ruby      | TCL       |
| C++       | Cuda      | HTML      | Lua       | Perl      | Rust      | Vulkan    |


??? solution "Highlighting for other languages"
    MkDocs supports syntax highlighting for a long list of programming languages.
    Syntax highlighting is provided by the [Pygments](https://pygments.org/) library
    and a full list of supported languages can be found [here](https://pygments.org/languages/).  
    To use syntax highlighting, just put the short-name for the language directly after the opening block.

    For example,
   
    ```
       ```yaml
       title: "YAML Highlighting Example"
       description: "This is an example of syntax highlighting for YAML."
       array_values:
           - value_1
           - value_2
       ```
    ```
   
    will produce this:
   
    ```yaml
    title: "YAML Highlighting Example"
    description: "This is an example of syntax highlighting for YAML."
    array_values:
        - value_1
        - value_2
    ```

### Advanced Code Block Features
MkDocs-Material supports a variety of additional features for code-blocks, such as:

* adding a title (e.g. for a filename)
* adding annotations
* adding line numbers
* highlighting specific lines
* highlighting inline code blocks 

Please refer to the page on 
[Code Blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/#usage) 
in the MkDocs-Material Reference manual on how to use them.

## Callouts (Admonitions)

Callouts (which mkdocks-material called Admonitions) can be used to create 
formatted boxes around special content like notes, challenges, checkpoints,
to have them stand out optically.

The callout it initiated by beginning a line with three exclamation marks `!!!` 
followed by a space and the callout type (e.g. `note`) and optionally a title.
If no title is given, The capitalized type is used as a the title.  
This is followed by lines that are indented with four spaces, to be align
vertically with callout type.  
The content of the callout-box ends, once text resumes vertically aligned
with the exclamation marks.

For example:

```
!!! note "Callout Title"
    
    text
    text
    text
    
    ```
    code
    ```
```

This is rendered as:

!!! callout "Callout Title"
    
    text
    text
    text
    
    ```
    code
    ```

If three question-marks (`???`) are used to create a Collapsible callout 
which is used with solutions for exercises:

````{.text .raw}
??? solution
    Exercise solution.  
    Start callout-block with `???` instead of `!!!` to hide the answer on load.
````

??? solution
    Exercise solution.  
    Start callout-block with `???` instead of `!!!` to hide the answer on load.

The [lesson template]({{ site.template_repo }}) defines styles
for the following special callouts:

<div class="grid cards" markdown>
- !!! callout "Tag `callout`"
      An aside or other comment.
- !!! objectives
      Episode objectives
- !!! challenge
      An exercise.
- !!! prereq
      Prerequisites.
- !!! checklist
      Checklists.
- ??? solution
      Exercise solution.  
      Start callout-block with `???` instead of `!!!` to hide the answer on load.
- !!! discussion
      Discussion questions.
- !!! testimonial
      A laudatory quote from a user.
- !!! keypoints
      Key points of an episode.
- !!! caution
      A Warning.
</div>


Note that `challenge` and `discussion` have the same color but different icons.

Most authors will only use `callout`, `challenge`, and `prereq`,
as the others are automatically generated by the template.
Note that `prereq` is meant for describing things
that learners should know before starting this lesson;
setup instructions do not have a particular style,
but are instead put on the `docs/setup.md` page.

Note also that solutions are nested inside exercises as shown below:

````
!!! challenge "Challenge Title"
    This is the body of the challenge.
    
    ```
    it may include some code
    ```
    
    ??? solution "Solution"
       
        This is the body of the solution.
       
        ```
        it may also include some code
        ```
````

!!! challenge "Challenge Title"
    This is the body of the challenge.
    
    ```
    it may include some code
    ```
    
    ??? solution "Solution"
       
        This is the body of the solution.
       
        ```
        it may also include some code
        ```

The double indentation is annoying to edit,
but the alternatives we considered and discarded are worse:

1.  Use HTML `<div>` elements for the challenges.
    Most people dislike mixing HTML and Markdown,
    and experience shows that it's all too easy to confuse Markdown parsers.

2.  Put solutions immediately after challenges rather than inside them.
    This is simpler to edit,
    but clutters up the page
    and makes it harder for tools to tell which solutions belong to which exercises.

## Applying a Shadow to Images

By default, images in the lesson are displayed without borders or shadows.
In some circumstances, it may be desirable to make images stand out
from the background of the page,
for example, when using screenshots that include text on white background.
You can add a drop shadow effect to images by applying the
`image-with-shadow` class to them:

```
![image alt text](path/to/image/source.svg){: .image-with-shadow }
```


{% include links.md %}