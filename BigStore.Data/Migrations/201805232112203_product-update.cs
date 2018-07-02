namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class productupdate : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.products", "createby");
        }
        
        public override void Down()
        {
            AddColumn("dbo.products", "createby", c => c.String());
        }
    }
}
