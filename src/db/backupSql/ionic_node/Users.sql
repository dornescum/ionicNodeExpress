create table Users
(
    id        int auto_increment
        primary key,
    name      varchar(255)                             null,
    createdAt datetime                                 not null,
    updatedAt datetime                                 not null,
    age       int                                      not null,
    email     varchar(255) default 'default@email.com' null,
    constraint email
        unique (email),
    constraint email_2
        unique (email)
);

