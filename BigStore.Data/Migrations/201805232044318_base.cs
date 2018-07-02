namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _base : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.categoriess",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        nameAr = c.String(nullable: false, maxLength: 50),
                        nameEn = c.String(nullable: false, maxLength: 50),
                        discriptionAr = c.String(),
                        discriptionEn = c.String(),
                        imagepath = c.String(maxLength: 200, fixedLength: true),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(maxLength: 128, fixedLength: true),
                        updatedby = c.String(maxLength: 128, fixedLength: true),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.products",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        nameAr = c.String(nullable: false),
                        nameEr = c.String(nullable: false),
                        code = c.String(maxLength: 10, fixedLength: true),
                        price = c.Decimal(nullable: false, precision: 6, scale: 2),
                        rate = c.Int(),
                        image_path = c.String(maxLength: 100, fixedLength: true),
                        createby = c.String(),
                        categoryid = c.Int(),
                        isoffer = c.Boolean(),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(),
                        updatedby = c.String(),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.categoriess", t => t.categoryid)
                .Index(t => t.categoryid);
            
            CreateTable(
                "dbo.orderdetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        orderId = c.Int(),
                        productId = c.Int(),
                        price = c.String(maxLength: 10, fixedLength: true),
                        quantity = c.Int(),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(),
                        updatedby = c.String(),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.orders", t => t.orderId)
                .ForeignKey("dbo.products", t => t.productId)
                .Index(t => t.orderId)
                .Index(t => t.productId);
            
            CreateTable(
                "dbo.orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        customerId = c.Int(),
                        duedate = c.DateTime(),
                        totalprice = c.Double(),
                        status = c.Int(),
                        note = c.String(),
                        isactive = c.String(maxLength: 10, fixedLength: true),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(),
                        updatedby = c.String(),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.customers", t => t.customerId)
                .Index(t => t.customerId);
            
            CreateTable(
                "dbo.customers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        username = c.String(nullable: false, maxLength: 50),
                        password = c.String(nullable: false, maxLength: 50),
                        nameAr = c.String(nullable: false),
                        nameEn = c.String(nullable: false),
                        address = c.String(),
                        phone = c.String(nullable: false, maxLength: 100, fixedLength: true),
                        email = c.String(maxLength: 100, fixedLength: true),
                        lastlogin = c.DateTime(),
                        isactive = c.Boolean(nullable: false),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(),
                        updatedby = c.String(),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        username = c.String(nullable: false, maxLength: 50),
                        password = c.String(nullable: false, maxLength: 50),
                        nameAr = c.String(),
                        nameEn = c.String(),
                        email = c.String(maxLength: 100, fixedLength: true),
                        lastlogin = c.DateTime(),
                        isactive = c.Boolean(),
                        isadmin = c.Boolean(),
                        createdate = c.DateTime(nullable: false),
                        updatedate = c.DateTime(nullable: false),
                        createdby = c.String(),
                        updatedby = c.String(),
                        isdeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.products", "categoryid", "dbo.categoriess");
            DropForeignKey("dbo.orderdetails", "productId", "dbo.products");
            DropForeignKey("dbo.orderdetails", "orderId", "dbo.orders");
            DropForeignKey("dbo.orders", "customerId", "dbo.customers");
            DropIndex("dbo.orders", new[] { "customerId" });
            DropIndex("dbo.orderdetails", new[] { "productId" });
            DropIndex("dbo.orderdetails", new[] { "orderId" });
            DropIndex("dbo.products", new[] { "categoryid" });
            DropTable("dbo.users");
            DropTable("dbo.customers");
            DropTable("dbo.orders");
            DropTable("dbo.orderdetails");
            DropTable("dbo.products");
            DropTable("dbo.categoriess");
        }
    }
}
