create table testing
(
    id         int auto_increment
        primary key,
    name       varchar(255)                          not null,
    created_at timestamp default current_timestamp() not null
);

