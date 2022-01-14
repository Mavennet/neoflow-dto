import { Column, CreateDateColumn, Entity, ManyToOne, ManyToMany, PrimaryColumn, JoinColumn } from 'typeorm'

import { Organization } from '../../organizations/entities/Organization.entity'
import { Product } from '../../products/entities/Product.entity'

export enum EVENT_TYPE {
  CREATE = 'CREATE',
  INSPECT = 'INSPECT',
  TRANSPORT_START = 'TRANSPORT_START',
  TRANSPORT_END = 'TRANSPORT_END',
  STORAGE_START = 'STORAGE_START',
  STORAGE_END = 'STORAGE_END',
  TRANSFORM_UPGRADE = 'TRANSFORM_UPGRADE',
  TRANSFORM_REFINE = 'TRANSFORM_REFINE',
  TRANSFORM_POOL = 'TRANSFORM_POOL',
  TRANSFORM_BLEND = 'TRANSFORM_BLEND',
  TRANSFORM_SPLIT = 'TRANSFORM_SPLIT',
  TRANSFER_OF_OWNERSHIP = 'TRANSFER_OF_OWNERSHIP',
  TRANSFER_OF_CUSTODY = 'TRANSFER_OF_CUSTODY',
  CREATE_QP_IN_BOND = 'CREATE_QP_IN_BOND'
}

export const EVENT_TYPE_NAME = new Map<string, string>([
  [EVENT_TYPE.CREATE, 'New'],
  [EVENT_TYPE.TRANSFORM_UPGRADE, 'Consumed'],
  [EVENT_TYPE.TRANSFORM_REFINE, 'Consumed'],
  [EVENT_TYPE.TRANSFORM_POOL, 'Consumed'],
  [EVENT_TYPE.TRANSFORM_BLEND, 'Consumed'],
  [EVENT_TYPE.TRANSFORM_SPLIT, 'Consumed'],
  [EVENT_TYPE.TRANSFER_OF_OWNERSHIP, 'Ownership transferred'],
  [EVENT_TYPE.TRANSFER_OF_CUSTODY, 'In Transit'],
  [EVENT_TYPE.TRANSPORT_START, 'Scheduled'],
  [EVENT_TYPE.CREATE_QP_IN_BOND, 'Declared'],
  [EVENT_TYPE.TRANSPORT_END, 'Transport Completed'],
  [EVENT_TYPE.INSPECT, 'Inspected'],
  [EVENT_TYPE.STORAGE_START, 'In Storage'],
  [EVENT_TYPE.STORAGE_END, 'Out of Storage']
])

@Entity()
export class Event {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  createdById: number

  @ManyToOne(() => Organization, (organization) => organization.id, {
    cascade: true
  })
  @JoinColumn({ name: 'createdById' })
  createdBy: Organization

  @Column({ length: 255, default: '' })
  eventType: EVENT_TYPE

  @ManyToMany(() => Product, (product) => product.events)
  products: Product[]

  @Column({ length: 255, unique: true })
  txHash: string

  @Column()
  txTimestamp: string // TODO fix data type

  @Column({ type: 'json' })
  eventVC: any // TODO all event VC separated via |

  @Column({ length: 255, unique: true })
  eventVCHash: string

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  createdAt: Date

  @Column({ default: '' })
  s3DocumentsFolderPath: string
}
