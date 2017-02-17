CREATE TABLE `comment` (
  `id` INTEGER  PRIMARY KEY ,
  `username` varchar(32) ,
  `content` varchar(256) ,
  `create_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

alter table comment DROP page ;