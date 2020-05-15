# Deno-CSV-DB

## Introduction

Indexes and O(1) operations? Nooooh…
Binary files? Eeeeeewh…
Eventual consistency? DBMS? Role based permissions? Whaaaat???

Welcome to deno-csv-db, a stateful server that saves state stupidly in csv files.

Nobody on the planet should implement this database in a production app. It’s stupid and naive in all aspects. We shouldn’t even be calling it a database. 

But what if you’re just learning to code, and want to understand statefulness in a server? What if you want to create an initial table with two rows, just by creating a .csv file? What if you’re a front-end developer who just wants to have a tiny poc-level database and persist a couple rows of test data?

Then deno-csv-db might be just for you.  

## What is it

deno-csv-db is a simple CRUD server, but without a proper DBMS (Database Management System) behind it. This makes it very inappropriate for production, but it may be of some help during prototyping. 

### Pros
- You can start off with some test data that you just made up in excel (export to csv)
- There's only CRUD. creating a new item in a not-existing table will simply create the table 

### Cons
- Before deploying to production, a proper DBMS should be installed. 

### Unknowns at this moment
- Error messages - will they be clear enough so that a beginner can work with them?

=====================================================================================================

------------------
|                |
|      APP       |  --  DOM output
|                |
------------------
        |
        |  --  JSON strings
        |
------------------
|                |
|     CSV-DB     |  --  CSV files
|                |
------------------