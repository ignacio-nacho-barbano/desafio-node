-- Table: public.inmuebles

-- DROP TABLE IF EXISTS public.inmuebles;

CREATE TABLE IF NOT EXISTS public.inmuebles
(
    id integer NOT NULL DEFAULT nextval('inmuebles_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    metros_cuadrados integer,
    direccion character varying COLLATE pg_catalog."default",
    precio_venta character varying COLLATE pg_catalog."default",
    CONSTRAINT inmuebles_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.inmuebles
    OWNER to postgres;