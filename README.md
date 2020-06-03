# Installation

1. Install MongoDB
    - Win
        ```
        $ scoop install mongodb
        $ md C:\data\db C:\data\log
        $ copy NUL C:\Users\<YOUR_USERNAME>\scoop\apps\mongodb\mongod.cfg
        $ notepad C:\Users\<YOUR_USERNAME>\scoop\apps\mongodb\mongod.cfg
        ```
        Paste:
        ```
        systemLog:
            destination: file
            path: C:\data\log\mongod.log
        storage:
            dbPath: C:\data\db
        ```
        Run:

        `$ mongod --config C:\Users\<YOUR_USERNAME>\scoop\apps\mongodb\mongod.cfg`

        Run CMD as Admin, then:

        `$ mongod --install`

2. After installing MongoDB:
    ```
    $ cd r-board
    $ npm i
    ```


# Running

Running MongoDB:

- Win
    1. Run CMD as Admin
    2. `net start MongoDB`

Stopping MongoDB:

- Win
    1. Run CMD as Admin
    2. `net stop MongoDB`

Dev: 

```
$ cd r-board
$ npm run start
```



