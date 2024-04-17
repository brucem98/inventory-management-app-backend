import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Supplier } from './Supplier';

// This entity represents the association between Products and Suppliers in a N:N (many to many) relationship

@Entity()
export class SupplierProduct {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    supplierSku: string

    @ManyToOne(() => Product, (product) => product.supplierProducts, { nullable: false })
    product: Product

    @ManyToOne(() => Supplier, (supplier) => supplier.supplierProducts, { nullable: false })
    supplier: Supplier
}