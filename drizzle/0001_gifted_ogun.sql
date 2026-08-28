ALTER TABLE `partnerLeads` ADD `state` enum('PR','SC') NOT NULL;--> statement-breakpoint
ALTER TABLE `partnerLeads` ADD `referralCode` varchar(24) NOT NULL;--> statement-breakpoint
ALTER TABLE `partnerLeads` ADD `referredByCode` varchar(24);--> statement-breakpoint
ALTER TABLE `partnerLeads` ADD CONSTRAINT `partnerLeads_referralCode_unique` UNIQUE(`referralCode`);