create table SequelizeMeta
(
    name varchar(255) not null
        primary key,
    constraint name
        unique (name)
)
    collate = utf8_unicode_ci;

