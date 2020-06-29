<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $listaPersonas = Persona::all();
        } catch (\Exception $e) {
            return response()->json(['res' => 'error', 'message' => 'Error al ejecutar consulta']);//status 500
        }
        return response()->json(['res' => 'success', 'data' => $listaPersonas]);
        //status 200
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->json()->all(),
            [
                'nombre' => ['required', 'string', 'max:255'],
                'apellido' => ['required', 'string', 'max:255'],
                'telefono' => ['required', 'string', 'max:8'],
                'pais' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'unique:personas'],
                'password' => ['required', 'string']
            ]
        );
        if ($validator->fails()) {
            return response()->json(["res" => "error", "reason" => "validation", "message" => $validator->messages()]);
        }

        $objPersona = new Persona();
        $objPersona->nombre = $request->json('nombre');
        $objPersona->apellido = $request->json('apellido');
        $objPersona->telefono = $request->json('telefono');
        $objPersona->pais = $request->json('pais');
        $objPersona->email = $request->json('email');
        $objPersona->password = Hash::make(request()['password']);
        $objPersona->save();
        return response()->json(["res" => "insertado correctamente", "persona_id" => $objPersona->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return void
     */
    public function show($id)
    {
        //


        $objPersona = null;
        try {
            $objPersona = Persona::find($id);
        } catch (\Exception $e) {
            return response()->json(['res' => 'error', 'message' => 'Error al ejecutar consulta']);//status 500
        }

        if ($objPersona == null) {
            return response()->json(['res' => 'error', 'message' => 'Error, persona no encontrada']);//status 404
        }
        return response()->json(['res' => 'success', 'data' => $objPersona]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return void
     */

    public function update(Request $request, $id)
    {

        $objPersona = Persona::find($id);
        if ($objPersona == null) {
            return response()->json(['res' => 'error', 'message' => 'Error, persona no encontrada']);//status 404
        }
        if ($request->json('nombre') != null) {
            $objPersona->nombre = $request->json('nombre');
        }
        if ($request->json('apellido') != null) {
            $objPersona->apellido = $request->json('apellido');
        }
        if ($request->json('telefono') != null) {
            $objPersona->telefono = $request->json('telefono');
        }
        if ($request->json('pais') != null) {
            $objPersona->pais = $request->json('pais');
        }
        if ($request->json('email') != null) {
            $objPersona->email = $request->json('email');
        }

        if ($request->json('password') != null) {
            $objPersona->password = Hash::make(request()['password']);
        }
        try {
            $objPersona->save();
        } catch (\Exception $e) {
            return response()->json(['res' => 'error', 'message' => 'Error al ejecutar consulta']);//status 500
        }
        return response()->json(['res' => 'success', 'data' => $objPersona]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return void
     */
    public function destroy($id)
    {
        $objPersona = Persona::find($id);
        if ($objPersona == null) {
            return response()->json(['res' => 'error', 'message' => 'Error, persona no encontrada']);//status 404
        }
        try {
            $objPersona->delete();
        } catch (\Exception $e) {
            return response()->json(['res' => 'error', 'message' => 'Error al ejecutar consulta']);//status 500
        }
        return response()->json(['res' => "success"]);
    }
}
