.. include:: /Includes.rst.txt

.. index:: installation; Tutorial DDEV

.. _installation-ddev-tutorial:

==========================
Установка TYPO3 с помощью DDEV
==========================

Это пошаговое руководство, в котором подробно описана установка TYPO3 с помощью DDEV, Docker и Composer.

DDEV используется только для локальных разработок.

Сценарии, используемые в данном руководстве, устанавливают TYPO3 v12.0, являющуюся последней версией CMS. Если необходимо установить версию TYPO3 с долгосрочной поддержкой (LTS), посетите сайт :ref:`TYPO3 v11 Installation instructions <t3start11:install>`.

..  youtube:: HW7J3G1SqZw

Контрольный перечень работ перед установкой
--------------------------

#.  **Установка Docker** - Посетите сайт `docker.com <https://www.docker.com/>`__, чтобы загрузить и установить рекомендуемую версию Docker для вашей операционной системы.

#.  **Установка DDEV** - Для установки DDEV следуйте руководству `DDEV installation guide <https://ddev.readthedocs.io/en/stable/>`__.

Перед установкой TYPO3 на локальной машине необходимо установить DDEV и Docker. Если вам нужна помощь в установке DDEV, поддержку можно получить на сервере `DDEV Discord <https://discord.gg/kDvSFBSZfs>`__.

Создание каталога установки
---------------------------------

Создайте пустой каталог для установки TYPO3, а затем перейдите в этот каталог:

..  code-block:: bash

    mkdir t3example
    cd t3example

Создание нового проекта DDEV
-------------------------

Команда `ddev config` запросит информацию о вашем проекте. TYPO3 находится в списке предварительно сконфигурированных проектов.

..  code-block:: bash

    ddev config --php-version 8.1

    # Give the following answers when prompted:

    Project name (t3example):

    Docroot Location (current directory): public

    Create docroot at /home/myuser/projects/t3/t3example/public? [Y/n] (yes): Y

    Project Type [php, typo3, ...] (php): typo3

project-type
    Должен быть всегда "typo3"

docroot
    Это папка, в которой хранятся все файлы, до которых должен добраться браузер. Эта папка обычно называется :file:`public`.

create-docroot
    Поскольку каталог еще не существует, можно позволить DDEV создать его за вас.

В качестве альтернативы можно пропустить приглашение, указав все необходимые параметры в одной команде:

..  code-block:: bash

    ddev config  --project-type=typo3 --docroot=public --create-docroot --php-version 8.1

Запуск проекта
-----------------

..  code-block:: bash

    ddev start

Веб-сервер теперь работает, но TYPO3 не установлен.

Установка TYPO3
-------------

..  code-block:: bash

    ddev composer create "typo3/cms-base-distribution:^12"

Так как мы только что создали проект и у нас его фактически еще нет, ответьте "да" на вопрос о том, можно ли перезаписывать файлы в этом каталоге.

Теперь у вас есть **установка TYPO3 на базе Composer**.

Запустите программу настройки установки Installation Setup Tool
-------------------------------

Настройка TYPO3 в консоли
~~~~~~~~~~~~~~~~~~~~~~~~~~

..  versionadded:: 12.1
    Начиная с версии TYPO3 12.1 в качестве альтернативы существующему веб-инсталлятору с графическим интерфейсом введена новая команда CLI `setup`.

Интерактивная / управляемая установка (вопросы/ответы):

..  code-block:: bash

    ddev exec ./vendor/bin/typo3 setup

Установка TYPO3 с помощью 1,2,3 Install Tool в браузере
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Создайте файл с названием :file:`FIRST_INSTALL` в корне вашего сайта

..  code-block:: bash

    ddev exec touch public/FIRST_INSTALL

Откройте программу установки

..  code-block:: bash

    ddev launch typo3/install.php

Перейдите во внутренний интерфейс TYPO3:

..  code-block:: bash

    ddev launch typo3

И войдите в систему, используя только что предоставленные учетные данные.


Управление базой данных
---------------------

Upon calling :bash:`ddev config` DDEV automatically created a database for
you. DDEV also created a file called :file:`config/system/additional.php`
in which it stored the database credentials for you.

During the installation setup process TYPO3 created all the tables it needed.
If you want to have a look at the database, you can run the following command:

..  code-block:: bash

    ddev launch -p

Sending E-Mail
--------------

DDEV creates :file:`config/system/additional.php`
to fake sending mails. You can see what mails have been sent here:

..  code-block:: bash

    ddev launch -m

Stopping a DDEV Instance
------------------------

If you want to stop all projects from running you can call:

..  code-block:: bash

    ddev poweroff

The projects will stay configured and databases will be persisted.

Deleting a DDEV Instance
------------------------

If you want to delete the project you just created you can remove it by
calling the following command in your new projects root folder:

..  code-block:: bash

     ddev delete --omit-snapshot

This will remove all containers from the project and delete the database.

Afterwards you can safely delete the project's root folder.
