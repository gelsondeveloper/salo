<?php
class Estagio{
 
    // database connection and table name
    private $conn;
    private $table_name = "estagios";
 
    // object properties
    public $id;
    public $empresa;
    public $curso;
    public $area;
    public $tempo;
     
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
}