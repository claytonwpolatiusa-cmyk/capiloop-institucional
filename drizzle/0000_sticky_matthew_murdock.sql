CREATE TABLE `partnerLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`businessName` varchar(160) NOT NULL,
	`contactName` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32) NOT NULL,
	`city` varchar(120) NOT NULL,
	`category` varchar(80) NOT NULL,
	`availabilityDescription` text NOT NULL,
	`notes` text,
	`agreesToContact` boolean NOT NULL,
	`status` enum('new','contacted','approved','archived') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `partnerLeads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `surpriseBags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`partnerName` varchar(160) NOT NULL,
	`title` varchar(160) NOT NULL,
	`category` varchar(80) NOT NULL,
	`city` varchar(120) NOT NULL,
	`neighborhood` varchar(120),
	`priceCents` int NOT NULL,
	`originalPriceCents` int,
	`quantityAvailable` int NOT NULL,
	`pickupStart` varchar(5) NOT NULL,
	`pickupEnd` varchar(5) NOT NULL,
	`imageUrl` text,
	`isAvailable` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `surpriseBags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
