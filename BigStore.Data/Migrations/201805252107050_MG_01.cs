namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MG_01 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.products", "starRating", c => c.Int());
            AddColumn("dbo.products", "imageUrl", c => c.String(maxLength: 100, fixedLength: true));
            DropColumn("dbo.products", "rate");
            DropColumn("dbo.products", "image_path");
        }
        
        public override void Down()
        {
            AddColumn("dbo.products", "image_path", c => c.String(maxLength: 100, fixedLength: true));
            AddColumn("dbo.products", "rate", c => c.Int());
            DropColumn("dbo.products", "imageUrl");
            DropColumn("dbo.products", "starRating");
        }
    }
}
