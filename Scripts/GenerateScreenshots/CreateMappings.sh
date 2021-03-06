#!/bin/sh

./vendor/bin/typo3cms screenshots:getmapping --table=pages --filename=pages.json --additional-fields="title,sys_language_uid"
./vendor/bin/typo3cms screenshots:getmapping --table=tt_content --filename=tt_content.json --additional-fields="header,sys_language_uid"
./vendor/bin/typo3cms screenshots:getmapping --table=be_groups --filename=be_groups.json --additional-fields="title"
./vendor/bin/typo3cms screenshots:getmapping --table=sys_language --filename=sys_language.json --additional-fields="title,language_isocode" --checkDeleted=false
