..  include:: /Includes.rst.txt

..  _getting-started-glossary-index:


.. todo: Note for contributing
.. todo: Links for further information
.. todo: Add missing descriptions

========
Glossary
========

**A**

**Apache**: `Apache httpd <https://en.wikipedia.org/wiki/Apache_HTTP_Server>`__
is a web server. Others are Nginx, Microsoft IIS and Caddy Server (`see system requirements <https://get.typo3.org/version/13#system-requirements>`__).

**Admin Tools**: Admin tools are a group of backend modules.
These include maintaining the installation, adjusting settings, executing upgrade wizards,
checking environment information and setting up extensions.

**Admin User**:

**Assets**: Assets are media resources such as images, videos and documents that are uploaded and managed in TYPO3 system.
Also, extensions can include assets which used in the frontend, like icons or JavaScript libraries.

**Application context**: In TYPO3, the Application Context is the environment
(e.g., Development, Production) the site is running in, which sets things like debugging or
performance optimization accordingly. This helps tailor TYPO3 behavior for each stage of deployment.

**B**

**Backend**: The backend is the administrative interface for editors and administrators.

**Block syntax**: In TypoScript you can use block syntax to enhance the readability of your code.

**Bootstrap**: Bootstrap is a popular, beginner-friendly framework for building responsive, mobile-first
websites using pre-designed HTML, CSS, and JavaScript components.

**C**

**Class**: In PHP we can define classes located in the directory
EXT:my_extension/Classes. If the namespace is correct they will be loaded
automatically.

**Cache**: Caches are used to improve website performance by storing frequently
accessed data. TYPO3 has multiple caches for various performance-relevant areas in both the frontend and backend.

**cObject**: A cObject (content object) is a core concept used to render content types on a website,
allowing developers to define and control how content elements like text, images, and menus are displayed.

**Character Set**: A `character set <https://www.w3.org/International/getting-started/characters.en.html>`__
is a collection of letters and symbols used in a writing system.

**Composer**: Composer is a tool used in TYPO3 to install, update, and manage extensions and libraries,
making it simple to handle dependencies and keep the system up to date.

**Compression**: In TypoScript you can compress css and js files.

**CMS**: A CMS, or Content Management System, is software like TYPO3 that allows users to create, edit,
and manage website content without needing to code, making it easier to maintain and update websites.

**Content Security Policy**: A Content Security Policy (CSP)
makes the frontend and backend more secure from attacks by restricting the rules
governing what a user of a website or TYPO3 backend can do. CSP is a W3C standard
valid for everyone. TYPO3 provides a backend module that manages
this security feature. CSP helps to protect your website from
attacks by controlling which resources (like scripts, styles, or images) are
loaded, reducing the risk of malicious content being injected. To
configure CSP go to :ref:`Content Security Policy <t3coreapi:content-security-policy>`.

**CType**: CType refers to Content Type and is a database column field in a very
important database table called 'tt_content' which stores all the content elements.
The column defines the name of the content element, and influences how it is
displayed in the backend and frontend.

**D**

**Database**: A database stores and manages all a website's content, settings, and configurations,
allowing the system to retrieve and display data dynamically on the site.

**Documentation**: Documentation consists of detailed guides and instructions to help users and developers understand,
set up, and customize TYPO3, making it easier to work with the system effectively.

**Docker**: Docker is a tool that runs TYPO3 in a consistent and isolated environment by packaging it with all its
dependencies, making setup, deployment, and development easier and more reliable.

**DDEV**: DDEV is a local development tool that simplifies setting up a TYPO3 environment on your computer, making it
easy to start developing, testing, and managing TYPO3 projects without complex configuration.

**Deployment**: Deployment refers to the process of transferring your website’s code, content, and settings from a
development environment to a live server, making it accessible to users online.

**Debug mode**: Debug Mode is a feature that helps developers find and fix errors by showing detailed information
about a website’s processes and any issues with the code.

**Developer**: A developer is someone who builds, customizes, and maintains a website, creating new features,
fixing issues, and ensuring everything works smoothly for users and administrators.

**Dependencies**: In Composer there are usually dependencies that have to be installed too.

**E**

**Editor**: An editor is a user who creates and manages content on a website, such as adding text, images, and links,
without needing technical or coding knowledge.

**Extension**: An extension is an add-on that provides additional features or functionality to a website,
allowing you to customize and expand what TYPO3 can do.

**Extension Configuration**:

**Error page**: An error page is a custom page that is displayed to users when something goes wrong,
such as when a page is not found (404) or there is a server issue (500).

**F**

**Fluid**: Fluid is a PHP template engine and is the de facto standard for any
HTML-based output in the TYPO3 CMS. See :ref:`Fluid Reference<t3coreapi:fluid>`
for further details.

**Fileadmin**: Fileadmin is a folder structure where you can organize and manage all the files, such as images,
documents, and media, that are used on your website.

**Filelist**: The filelist is a backend module where you can upload files and
manage your uploaded files.

**FAL**: :ref:`File abstraction layer (FAL) <t3coreapi:fal_introduction>` is a
system that manages and organizes media files, allowing you to easily store,
access, and use files across the entire website in a standardized way.

**Frontend**: The frontend is the publicly accessible part of a website.

**Frontend login**: You can implement a frontend login on your website. To
implement this use the system extension felogin provided by TYPO3.

**Fluid styled content extension**: The fluid styled content extension is a
system extension provided by TYPO3 that gives you default content elements,
palettes and backend fields. That is the reason why you can use bodytext,
image and assets without having to do a database compare.

**G**

**Global TYPO3 variables**: In TYPO3 there is a global TYPO3 configuration array
($GLOBALS) where you can declare :ref:`global settings/variables <t3coreapi:typo3ConfVars>`
for your TYPO3 instance. There are many different options. For example: BE -
backend configuration, DB - database connections and many more.

**H**

**I**

**Integrator**: An integrator is a person who connects and configures external
systems, services, or data sources with the TYPO3 platform, ensuring smooth
integration and functionality across different tools and applications.

**Installtool password**: The Install Tool password is a secure password used to
access the Install Tool, a tool that allows administrators to configure and
manage the TYPO3 system, including database connections and system settings.

**J**

**K**

**L**

**Local development**: It is common practice to develop locally on your local
machine first. Later when you are sure about your website you can think about
deployment and setting up a production environment which has better performance and
Content Security Policy settings.

**Local extension**:

**LTS**: LTS (Long-Term Support) in TYPO3 refers to a version of the software
that receives extended updates and security fixes for several years, ensuring
stability and reliability for businesses and long-term projects.

**Language file**: A language file is a file that contains translated text for
a website, allowing content to be displayed in different languages based
on a user’s preferences or settings.

**Layouts**: Layouts are templates that define the structure and design of
content elements on a website, allowing you to customize how content is
presented on different pages.

**Log Folder**: The log folder is a directory where system logs are stored,
helping administrators track errors, events, and activities to diagnose and
troubleshoot issues with a website.

**Legacy installation**:

**M**

**N**

**O**

**P**

**Production server**: A production server is the live server where a fully
developed website is hosted, making it accessible to users on the internet, and
it typically has optimized settings for performance and security.

**Partial**: A partial is a small or large HTML code snippet that can be used
often and in multiple places. Here we
:ref:`split up the template into partials <t3sitepackage:partials>`.

**Public**:

**Permissions**: Permissions control what users can see and do within a system,
such as editing content, managing files, or configuring settings, based on their
assigned roles and access levels.

**PHP**: PHP is a programming language used in TYPO3 to create dynamic web pages
and handle server-side logic, enabling features like content management, user
interactions, and database access.

**Page tree**: The Page Tree is a hierarchical structure that represents pages and
their subpages on a website, allowing you to easily organize and manage content and
navigation.

**Q**

**R**

**Resources**: In TYPO3, resources refer to files such as images, documents, and
other media that are used on a website, which are stored and managed through the
File Abstraction Layer (FAL) for easy access and organization.

**Root page**: The Root Page is the top-level page in the Page Tree, serving as
the starting point for a website's structure and is the foundation for the site's
overall configuration and settings.

**Reference index**: The Reference Index is a system that keeps track of all
content elements, files, and records that are linked or referenced throughout the
website, helping maintain data integrity and consistency.

**S**

**Symlink**: A symlink (symbolic link) is a shortcut or reference to a file or
directory located elsewhere on the server, allowing you to link content or
resources without duplicating them.

**Snapshot**: A snapshot is a backup or saved version of a website's content,
settings, and configuration at a specific point in time, which can be restored if needed.

**Static file**: In the context of templating we say a html file is "static"
when it does not use Fluid but only plain HTML.

**Site Package**: A :ref:`site package <t3coreapi:site-package>` is a custom
extension that includes all the necessary templates, configurations and settings
to create and manage a specific website, allowing for easy setup and deployment.

**Site Set**: Site sets refer to configurations that define specific settings for
different websites or domains within a multi-site setup, allowing you to manage
multiple websites from a single TYPO3 installation.

**Site Configuration**: Site configuration is the setup that defines the settings
for a specific website or domain, such as its language, routing, and templates,
enabling TYPO3 to serve the correct content for that site.

**System extension**: A system extension is a built-in extension that provides
essential functionality and features for the core system, such as user management,
backend tools, and caching, which are necessary for the website to operate.

**SEO**: SEO (Search Engine Optimization) refers to the process of optimizing a
website's content, structure and technical settings to improve its visibility
and ranking in search engine results, helping to attract more visitors.

**System maintainer**: A System Maintainer is a person responsible for managing
and maintaining the overall health and performance of a TYPO3 installation,
ensuring that the system is up to date, secure, and running smoothly.

**T**

**Third-party extension**: A third-party extension is an add-on developed by
external developers or companies. They extend the functionality of TYPO3,
providing additional features or integrations not included in the core system.

**TCA**:

**Template**: A HTML (Fluid) template is used to output HTML code.
See also :ref:`Fluid Templates <t3sitepackage:fluid-templates>`. Usually we use
:ref:`Fluid<t3coreapi:fluid>` and the :ref:`ViewHelpers<t3viewhelper:start>`.
Get an :ref:`introduction to Fluid templates <t3start:fluid-templates>`.

**Templating**: The templating engine that TYPO3 uses is Fluid.

**TER**: TER (TYPO3 Extension Repository) is an online platform where developers can share and download extensions,
allowing users to easily extend the functionality of their TYPO3 installation.

**TypoScript**: :ref:`TypoScript<t3tsref:start>` is the basic configuration
language used to configure the frontend output of a page in TYPO3.

**Top-level objects**: Top-level objects are core components or elements, such
as pages or content objects, that serve as starting points for building and
organizing the structure and content of a website.

**Testing**: Testing involves checking the functionality, performance, and
security of a website or extension to ensure everything works as expected before
deployment or during updates.

**TSconfig**: In TYPO3 you can set how the TYPO3 backend looks with
TSconfig files. You can set page related appearance, backend user related
appearance and backend user group appearance. You can use
:ref:`TSconfig Reference <t3tsconfig:start>` as a overall reference to look up
settings that you can use for TSconfig. Normally you keep all
your settings in TSconfig files like
EXT:my_extension/Configuration/Sets/MyExtension/page.tsconfig.

**U**

**Update**:

**V**

**Vendor folder**: The vendor folder is where external libraries and dependencies,
such as third-party extensions and frameworks, are stored. They are typically
managed by Composer, to be used by the TYPO3 system.

**Var folder**: The var folder is used to store temporary files, cached data,
logs, and other system-related information that helps the system function
efficiently during runtime.

**ViewHelper**: A view helper is a reusable function or tool used in Fluid
templates to manipulate or display data in a specific way, helping to keep
templates clean and organized.

**W**

**X**

**Y**

**Z**
