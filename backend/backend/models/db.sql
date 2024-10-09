create table posts(
	id int not null auto_increment,
    title varchar(100) not null,
    likes int,
    dislikes int,
    upload_date datetime not null,
    primary key(id)
);

create table photos(
	id int not null auto_increment,
    title varchar(100) not null,
    upload_date datetime not null,
    photo blob not null,
	primary key(id)
);

use quipu_backend_toy;

select * from posts;

ALTER table posts add column content text;

insert into posts values(1, "테스트", 0, 0, "2024-10-08", "Park", "테스트테스트");

select * from photos; 