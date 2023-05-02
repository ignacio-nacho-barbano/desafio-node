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

    INSERT INTO public.inmuebles(
	id, nombre, metros_cuadrados, direccion, precio_venta)
	VALUES (1, 'Casa-1', 100, 'Av. Colón 123', 'u$s 50.000'),
	(2, 'Casa-2', 300, 'Empalme 345', 'u$s 250.000'),
	(3, 'Casa-3', 150, 'Garibaldi 2345', 'u$s 80.000'),
	(4, 'Casa-4', 200, 'Asunción 342', 'u$s 150.000'),
	(5, 'Casa-5', 120, 'Rondeau 4567', 'u$s 190.000'),
	(6, 'Casa-6', 350, 'Av. Rafael Nuñes 200', 'u$s 400.000')