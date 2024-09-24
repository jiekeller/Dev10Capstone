drop database if exists learning_nlp_test;
create database learning_nlp_test;
use learning_nlp_test;

drop table if exists category;
drop table if exists author;
drop table if exists story;
drop table if exists app_user_role;
drop table if exists app_role;
drop table if exists app_user;

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
            on delete cascade
			on update cascade, 
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
            on delete cascade
			on update cascade
);

create table category (
	cat_id int auto_increment primary key,
    `type` varchar(20) not null
);

create table author (
	author_id int auto_increment primary key,
    `name` varchar(30) not null,
    `description` varchar(255)
);

create table story (
	story_id int auto_increment primary key,
    title varchar(255) not null,
    author_id int,
    `description` varchar(255),
    `text` LONGTEXT not null,
    publishedDate DATE, 
    cat_id int not null,
    
    constraint fk_author_id
    foreign key (author_id) references author(author_id)
    on delete cascade
    on update cascade, 
    
    constraint fk_cat_id
    foreign key (cat_id) references category(cat_id)
    on delete cascade
    on update cascade
);
        
delimiter //
create procedure set_known_good_state()
begin
	delete from story;
    delete from author;
	delete from category;
    delete from app_role;
    delete from app_user;
    delete from app_user_role;
	alter table author auto_increment=1;
	alter table category auto_increment=1;
    alter table story auto_increment=1;
    alter table app_role auto_increment=1;
    alter table app_user auto_increment=1;
    
	insert into author (`name`) values
		('George Orwell'),
		('The Founding Fathers');

	insert into category (`type`) values
		('DOCUMENT'),
		('SHORT_STORY'),
		('POEM'),
		('OTHER');
        
	insert into story (title, author_id, `text`, cat_id) values
		('Steelheart', 1, 'This was a book about steel, and his name was heart', 3);

	insert into app_role (`name`) values
		('USER'),
		('ADMIN');

	-- passwords are set to "P@ssw0rd!"
	insert into app_user (username, password_hash, enabled)
		values
		('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
		('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

	insert into app_user_role
		values
		(1, 2),
		(2, 1);

end//
delimiter ;